const fs = require("fs");
const path = require("path");
const data = JSON.parse(fs.readFileSync("./questions.json", "utf8"));
const stringToArr = (str) => {
  if (str) return str.split(" ");
  return [];
};
const getQuestions = (level, numbers) => {
  return data[level]
    .map((item, index) => ({ ...item, originalIndex: index }))
    .filter((item) =>
      numbers.some((num) => num === String(item.originalIndex + 1))
    )
    .map((item) => ({ ...item, index: item.originalIndex + 1 }));
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
  const dirPath = path.join(__dirname, "/data");
  const filePath = path.join(dirPath, `${name}.md`);
  // Ensure the 'data' directory exists
  return fs.existsSync(filePath);
};
function generateMarkdownFile(q, name, interviewer_name) {
  const markdownsDir = path.join(__dirname, "markdowns");
  if (!fs.existsSync(markdownsDir)) fs.mkdirSync(markdownsDir);

  const filePath = path.join(markdownsDir, `${name}.md`);

  let content = `# Interview with ${name}\n**Interviewer:** ${interviewer_name}\n\n`;

  for (const [level, questions] of Object.entries(q)) {
    content += `## ${level} Questions\n\n`;

    questions.forEach((question, index) => {
      // Question text
      content += `### ${index + 1}. ${question.question}\n\n`;

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
    ...getRandomNumbers([1, 13]).slice(0, 2), // Choose 2 from [1-13]
    ...getRandomNumbers([14, 15]).slice(0, 1), // Choose 1 from [14, 15]
    ...getRandomNumbers([16, 18]).slice(0, 1), // Choose 1 from [16, 18]
  ];

  // Intermediate
  const intermediate = [
    ...getRandomNumbers([1, 14]).slice(0, 2), // Choose 2 from [1-14]
    ...getRandomNumbers([15, 17]).slice(0, 1), // Choose 1 from [15, 17]
    ...getRandomNumbers([18, 19]).slice(0, 1), // Choose 1 from [18, 19]
    ...getRandomNumbers([20, 21]).slice(0, 1), // Choose 1 from [20, 21]
  ];

  // Advanced
  const advanced = [
    ...getRandomNumbers([1, 12]).slice(0, 1), // Choose 1 from [1-12]
    ...getRandomNumbers([13, 15]).slice(0, 1), // Choose 1 from [13, 15]
    ...getRandomNumbers([16, 18]).slice(0, 1), // Choose 1 from [16, 18]
    ...getRandomNumbers([19, 20]).slice(0, 1), // Choose 1 from [19, 20]
    ...getRandomNumbers([21, 23]).slice(0, 1), // Choose 1 from [21, 23]
    ...getRandomNumbers([24, 26]).slice(0, 1), // Choose 1 from [24, 26]
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
    countInRange(numbers, 1, 13) >= 2 &&
    countInRange(numbers, 14, 15) >= 1 &&
    countInRange(numbers, 16, 18) >= 1;

  const validateIntermediate = (numbers) =>
    countInRange(numbers, 1, 14) >= 2 &&
    countInRange(numbers, 15, 17) >= 1 &&
    countInRange(numbers, 18, 19) >= 1 &&
    countInRange(numbers, 20, 21) >= 1;

  const validateAdvanced = (numbers) =>
    countInRange(numbers, 1, 12) >= 1 &&
    countInRange(numbers, 13, 15) >= 1 &&
    countInRange(numbers, 16, 18) >= 1 &&
    countInRange(numbers, 19, 20) >= 1 &&
    countInRange(numbers, 21, 23) >= 1 &&
    countInRange(numbers, 24, 26) >= 1;

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

module.exports = {
  stringToArr,
  getQuestions,
  checkFileName,
  generateMarkdownFile,
  generateRandomQuestions,
  validateQuestions,
};
