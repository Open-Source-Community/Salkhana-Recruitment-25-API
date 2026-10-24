const fs = require("fs");
const path = require("path");
const levels = { level1: "Level_1", level2: "Level_2" };
const difficulties = ["Beginner", "Intermediate", "Advanced"];
const stringToArr = (str) => {
  if (str) return str.split(" ");
  return [];
};
const getQuestions = (level) => {
  const dir = levels[level];
  if (!dir) return null;
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "questions_data", dir, "questions.json"), "utf8"));
  return Object.fromEntries(difficulties.map((difficulty) => [difficulty, (data[difficulty] || []).map((q, index) => ({ ...q, id: q.id || index + 1 }))]));
};
const convertToMarkdown = (questions) => {
  let markdownContent = "";
  questions.forEach((q) => {
    markdownContent += `\n\n${q.index}. **Question:** \n<details><summary></summary>\n<br>\n${q.question}\n\n`;
    if (q.code) {
      markdownContent += "```javascript\n" + q.code + "\n```\n";
    }
    markdownContent +=
      "<br>\n</details>\n<br><details>\n<summary>Notes</summary>\n<!-- Write Notes Here -->\n\n</details>\n<br>\n<br>\n";
  });
  return markdownContent;
};
const convertAnswers = (questions) => {
  let markdownContent = "";

  questions.forEach((q) => {
    markdownContent += `\n\nQuestion ${q.index} \n<br>\n\n**Answer:** ${q.answer}\n\n**Explanation:** ${q.explanation}\n\n<br>\n`;
  });
  return markdownContent;
};


const checkFileName = (name) => {
  // Define the path where the .md file will be saved
  const dirPath = path.join(__dirname, "..", "markdowns");
  const filePath = path.join(dirPath, `${name}.md`);
  // Ensure the 'data' directory exists
  return fs.existsSync(filePath);
};
function generateMarkdownFile(q, name, interviewer_name, level = "level1", outputName = name) {
  const markdownsDir = path.join(__dirname,"..","markdowns");
  if (!fs.existsSync(markdownsDir)) fs.mkdirSync(markdownsDir);

  const filePath = path.join(markdownsDir, `${outputName}.md`);

  let content = `# Interview with ${name}\n**Interviewer:** ${interviewer_name}\n**Level:** ${level === "level1" ? "Level 1 · Foundations" : "Level 2 · Development"}\n\n`;

  let questionNumber = 1;
  for (const [level, questions] of Object.entries(q)) {
    content += `## ${level} Questions\n\n`;

    questions.forEach((question) => {
      content += `### ${question.id ?? questionNumber}. ${question.question}\n\n`;
      if (question.category) content += `**Category:** ${question.category}\n\n`;
      questionNumber += 1;

      // Always show code (if exists)
      if (question.code) {
        content += `\`\`\`js\n${question.code}\n\`\`\`\n\n`;
      }

      // Toggle for answer + explanation
      content += `<details>\n<summary>Show Answer</summary>\n\n`;

      if (question.answer) {
        content += `**Answer:**  \n${question.answer}\n\n`;
      }
      if (question.explanation) {
        content += `**Explanation:**  \n${question.explanation}\n\n`;
      }

      content += `</details>\n\n---\n\n`;
    });
  }

  fs.writeFileSync(filePath, content);
  return filePath;
}


function getRandomNumbers(range) {
  const [start, end] = range;
  const numbers = [];

  while (numbers.length < end - start + 1) {
    const randomNum = Math.floor(Math.random() * (end - start + 1)) + start;
    if (!numbers.includes(randomNum)) {
      numbers.push(randomNum);
    }
  }

  return numbers;
}

function generateRandomQuestions() {
  // Beginner
  const beginner = [
    ...getRandomNumbers([1, 13]).slice(0, 4), // Choose 4 from [1-13]
    ...getRandomNumbers([14, 15]).slice(0, 2), // Choose 2 from [14, 15]
    ...getRandomNumbers([16, 18]).slice(0, 1), // Choose 1 from [16, 18]
  ];

  // Intermediate
  const intermediate = [
    ...getRandomNumbers([1, 14]).slice(0, 3), // Choose 3 from [1-14]
    ...getRandomNumbers([15, 17]).slice(0, 2), // Choose 2 from [15, 17]
    ...getRandomNumbers([18, 20]).slice(0, 2), // Choose 2 from [18, 20]
    ...getRandomNumbers([21, 23]).slice(0, 1), // Choose 1 from [21, 23]
  ];

  // Advanced
  const advanced = [
    ...getRandomNumbers([1, 11]).slice(0, 1), // Choose 1 from [1-11]
    ...getRandomNumbers([12, 13]).slice(0, 1), // Choose 1 from [12, 13]
    ...getRandomNumbers([14, 16]).slice(0, 1), // Choose 1 from [14, 16]
    ...getRandomNumbers([17, 21]).slice(0, 1), // Choose 1 from [17, 21]
    ...getRandomNumbers([22, 25]).slice(0, 1), // Choose 1 from [22, 25]
  ];

  // Join the numbers into strings separated by spaces
  const beginnerString = beginner.join(" ");
  const intermediateString = intermediate.join(" ");
  const advancedString = advanced.join(" ");

  return {
    beginner: beginnerString,
    intermediate: intermediateString,
    advanced: advancedString,
  };
}

function validateQuestions(beginnerStr, intermediateStr, advancedStr) {
  const parseNumbers = (str) => str.split(" ").map(Number);

  const countInRange = (numbers, min, max) =>
    numbers.filter((num) => num >= min && num <= max).length;

  const validateBeginner = (numbers) =>
    countInRange(numbers, 1, 13) >= 4 &&
    countInRange(numbers, 14, 15) >= 2 &&
    countInRange(numbers, 16, 18) >= 1;

  const validateIntermediate = (numbers) =>
    countInRange(numbers, 1, 14) >= 3 &&
    countInRange(numbers, 15, 17) >= 2 &&
    countInRange(numbers, 18, 20) >= 2 &&
    countInRange(numbers, 21, 23) >= 1;

  const validateAdvanced = (numbers) =>
    countInRange(numbers, 1, 11) >= 1 &&
    countInRange(numbers, 12, 13) >= 1 &&
    countInRange(numbers, 14, 16) >= 1 &&
    countInRange(numbers, 17, 21) >= 1 &&
    countInRange(numbers, 22, 25) >= 1 
  const beginner = parseNumbers(beginnerStr);
  const intermediate = parseNumbers(intermediateStr);
  const advanced = parseNumbers(advancedStr);

  const isValidBeginner = validateBeginner(beginner);
  const isValidIntermediate = validateIntermediate(intermediate);
  // const isValidAdvanced = validateAdvanced(advanced);
  const isValidAdvanced = true;
  console.log(
    "Beginner:",
    isValidBeginner,
    "Intermediate:",
    isValidIntermediate,
    "Advanced:",
    isValidAdvanced
  );
  
  return isValidBeginner && isValidIntermediate && isValidAdvanced;
}

const level1CategoryQuotas = {
  Beginner: { "JavaScript Basics": 4, "Problem Solving": 1, "HTTP & Web Basics": 2 },
  Intermediate: { "JS Intermediate": 3, "Database Concepts": 2, "Various Questions": 2, "Node.js & Backend Fundamentals": 1 },
  Advanced: { "__all__": 5 },
};
const level2CategoryQuotas = {
  Beginner: { "JavaScript/TypeScript": 1, "Network & HTTP Methods": 2, Databases: 1, "Backend & APIs": 2, Tools: 1 },
  Intermediate: { "JavaScript/TypeScript": 2, "Network & HTTP Methods": 2, Databases: 2, "Backend & APIs": 2, "Authentication & Authorization": 1 },
  Advanced: { "__all__": 4 },
};
const jsIntermediateCategories = ["JS Intermediate Level"];
function quotasFor(data, level) {
  return level === "level1" ? level1CategoryQuotas : level2CategoryQuotas;
}
function categoryMatches(question, difficulty, category) {
  if (category === "__all__") return true;
  if (difficulty === "Intermediate" && category === "JS Intermediate") return jsIntermediateCategories.includes(question.category);
  return question.category === category;
}
function manualQuotas(data, level) {
  const quotas = quotasFor(data, level);
  return Object.fromEntries(difficulties.map((d) => [d, Object.values(quotas[d]).reduce((a, b) => a + b, 0)]));
}

function selectQuestions(data, selected) {
  return Object.fromEntries(difficulties.map((difficulty) => {
    const available = data[difficulty] || [];
    return [difficulty, (selected[difficulty] || []).map((id) => available.find((q) => q.id === id)).filter(Boolean)];
  }));
}

function randomQuestions(data, count = 20, level = "level2") {
  const quotas = quotasFor(data, level);
  return Object.fromEntries(difficulties.map((difficulty) => {
    const chosen = [];
    for (const [category, required] of Object.entries(quotas[difficulty])) {
      const pool = (data[difficulty] || []).filter((q) => categoryMatches(q, difficulty, category));
      for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
      if (pool.length < required) throw new Error(`Not enough ${difficulty} questions in ${category}.`);
      chosen.push(...pool.slice(0, required));
    }
    return [difficulty, chosen];
  }));
}

function sanitizeName(name) { return String(name).trim().replace(/\s+/g, "_").replace(/[^\p{L}\p{N}_-]/gu, ""); }

module.exports = { stringToArr, getQuestions, checkFileName, generateMarkdownFile, generateRandomQuestions, validateQuestions, manualQuotas, quotasFor, categoryMatches, selectQuestions, randomQuestions, sanitizeName };
