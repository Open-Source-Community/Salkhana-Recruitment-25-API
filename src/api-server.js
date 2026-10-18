const express = require("express");
const cors = require("cors");
const path = require("path");
const {
  getQuestions, manualQuotas, quotasFor, categoryMatches, selectQuestions, randomQuestions,
  sanitizeName, checkFileName, generateMarkdownFile,
} = require("./utility");

const app = express();
// Dedicated API server entry used by src/server.js.
const PORT = process.env.PORT || 3001;
const difficulties = ["Beginner", "Intermediate", "Advanced"];
app.use(cors());
app.use(express.json({ limit: "100kb" }));
app.use(express.static(path.join(__dirname, ".."), { etag: false, maxAge: 0 }));
app.use("/markdowns", express.static(path.join(__dirname, "..", "markdowns")));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "..", "index.html"), { headers: { "Cache-Control": "no-store" } }));

app.get("/api/questions/:level", (req, res) => {
  try {
    const data = getQuestions(req.params.level);
    if (!data) return res.status(404).json({ message: "Choose a valid interview level." });
    return res.json(Object.fromEntries(difficulties.map((difficulty) => [difficulty, (data[difficulty] || []).map(({ id, question, category }) => ({ id, question, category }))])));
  } catch (error) {
    console.error("Question load failed:", error);
    return res.status(500).json({ message: "Questions could not be loaded from this level's question file." });
  }
});

app.post("/api/generate", (req, res) => {
  const body = req.body || {};
  const { name = "", interviewer = "", level, mode = "manual", selected = {} } = body;
  const errors = {};
  if (!String(name).trim()) errors.name = "Enter the candidate's name.";
  else if (String(name).trim().length > 80) errors.name = "Name must be 80 characters or fewer.";
  if (!String(interviewer).trim()) errors.interviewer = "Enter the interviewer's name.";
  else if (String(interviewer).trim().length > 80) errors.interviewer = "Name must be 80 characters or fewer.";
  if (!["level1", "level2"].includes(level)) errors.level = "Choose Level 1 or Level 2.";
  if (!["manual", "random"].includes(mode)) errors.mode = "Choose random or manual questions.";
  if (Object.keys(errors).length) return res.status(400).json({ message: "Check the interview details and try again.", fieldErrors: errors });

  try {
    const data = getQuestions(level);
    let questions;
    if (level === "level1") {
      const requirements = quotasFor(data, level);
      for (const difficulty of difficulties) {
        for (const [category, required] of Object.entries(requirements[difficulty])) {
          const available = (data[difficulty] || []).filter((q) => categoryMatches(q, difficulty, category)).length;
          if (available < required) return res.status(422).json({ message: "The question bank is missing questions for the requested topic mix.", fieldErrors: { questions: `${difficulty} · ${category}: ${required} required, ${available} available.` } });
        }
      }
    }
    if (mode === "random") {
      questions = randomQuestions(data, 20, level);
    } else {
      if (!selected || typeof selected !== "object" || Array.isArray(selected) || difficulties.some((d) => !Array.isArray(selected[d]))) {
        return res.status(400).json({ message: "Choose the required question numbers from each difficulty.", fieldErrors: { questions: "Select the displayed number of questions in each difficulty." } });
      }
      const quotas = manualQuotas(data, level);
      if (difficulties.some((difficulty) => (data[difficulty] || []).length < quotas[difficulty])) {
        return res.status(500).json({ message: "This level does not have enough questions to meet the manual pack mix.", fieldErrors: { questions: "The question bank needs more questions in one or more difficulties." } });
      }
      for (const difficulty of difficulties) {
        const ids = selected[difficulty];
        const available = data[difficulty] || [];
        if (new Set(ids).size !== ids.length || ids.some((id) => !Number.isInteger(id) || !available.some((q) => q.id === id))) {
          return res.status(400).json({ message: "One or more selected question numbers are invalid.", fieldErrors: { questions: `Refresh the ${difficulty.toLowerCase()} list and try again.` } });
        }
        if (ids.length !== quotas[difficulty]) {
          return res.status(400).json({ message: "Select the required number from each difficulty.", fieldErrors: { questions: `Choose exactly ${quotas[difficulty]} ${difficulty.toLowerCase()} questions.` } });
        }
        if (level === "level1") {
          const requiredByCategory = quotasFor(data, level)[difficulty];
          for (const [category, required] of Object.entries(requiredByCategory)) {
            const categoryCount = ids.filter((id) => categoryMatches(available.find((q) => q.id === id), difficulty, category)).length;
            if (categoryCount !== required) return res.status(400).json({ message: "Select the required number from each topic.", fieldErrors: { questions: `Choose exactly ${required} question(s) from ${category} in ${difficulty}.` } });
          }
        }
      }
      questions = selectQuestions(data, selected);
    }
    const safeName = sanitizeName(name);
    const safeInterviewer = sanitizeName(interviewer);
    if (!safeName) return res.status(400).json({ message: "Enter a valid candidate name.", fieldErrors: { name: "Use letters or numbers in the name." } });
    if (!safeInterviewer) return res.status(400).json({ message: "Enter a valid interviewer name.", fieldErrors: { interviewer: "Use letters or numbers in the name." } });
    let outputName = safeName;
    let suffix = 2;
    while (checkFileName(outputName)) outputName = `${safeName}-${suffix++}`;
    const filePath = generateMarkdownFile(questions, safeName, safeInterviewer, level, outputName);
    return res.status(201).json({ message: "Interview questions are ready.", filePath: `/markdowns/${path.basename(filePath)}` });
  } catch (error) {
    console.error("Interview pack generation failed:", error);
    return res.status(500).json({ message: "Could not generate the interview questions. Please try again." });
  }
});

app.listen(PORT, () => console.log(`Salkhana Questions is running at http://localhost:${PORT}`));
