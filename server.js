const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const {
  stringToArr,
  getQuestions,
  checkFileName,
  generateMarkdownFile,
  generateRandomQuestions,
  validateQuestions,
} = require("./utility");

app.use(cors());
app.use(express.json());

const PORT = 3000;

// Serve markdown files so the browser can access them if needed
app.use("/markdowns", express.static(path.join(__dirname, "markdowns")));

app.get("/download", (req, res) => {
  let { beginner, intermediate, advanced, name, interviewer_name, random } = req.query;
  let q = {};

  console.log(req.query);

  //  Validate interviewee name
  if (!name || name.trim() === "") {
    return res.status(400).json({ msg: "Please add an interviewee name!" });
  }

  //  Validate interviewer name
  if (!interviewer_name || interviewer_name.trim() === "") {
    return res.status(400).json({ msg: "Please add an interviewer name!" });
  }

  name = name.replace(/\s+/g, "_");
  interviewer_name = interviewer_name.replace(/\s+/g, "_");

  const checkName = checkFileName(name);
  if (checkName) {
    return res.json({
      msg: "Interviewee already has a markdown file. Please enter a new name.",
    });
  }

  //  Random question mode
  if (random === "1") {
    const x = generateRandomQuestions();
    beginner = x.beginner;
    intermediate = x.intermediate;
    advanced = x.advanced;
  } else {
    //  Validate that some question numbers were provided
    if (!beginner && !intermediate && !advanced) {
      return res.status(400).json({
        msg: "Please enter at least one question number for any level (Beginner, Intermediate, or Advanced).",
      });
    }
  }

  //  Validate overall question input
  const checkQuestions = validateQuestions(beginner, intermediate, advanced);
  if (!checkQuestions) {
    return res.json({
      msg: "Invalid question numbers! Please check and try again.",
    });
  }

  //  Convert string inputs to arrays
  beginner = stringToArr(beginner);
  intermediate = stringToArr(intermediate);
  advanced = stringToArr(advanced);

  //  Build question objects
  q["Beginner"] = getQuestions("Beginner", beginner);
  q["Intermediate"] = getQuestions("Intermediate", intermediate);
  q["Advanced"] = getQuestions("Advanced", advanced);

  //  Generate markdown file
  let filePath = generateMarkdownFile(q, name, interviewer_name);
  filePath = filePath.replace(/\\/g, "/");

  //  Send response only once — no redirects
  return res.json({
    status: 200,
    msg: q,
    filePath: `/markdowns/${path.basename(filePath)}`,
  });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
