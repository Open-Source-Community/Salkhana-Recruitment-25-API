const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const PORT = 3000;
const {
  stringToArr,
  getQuestions,
  checkFileName,
  generateMarkdownFile,
  generateRandomQuestions,
  validateQuestions,
} = require("./utility");

app.get("/download", (req, res) => {
  let { beginner, intermediate, advanced, name, interviewer_name, random } =
    req.query;
  let q = {};
  console.log(req.query);
  
  if (!name) return res.status({ msg: "Add interviewee name!" });
  name = name.replace(" ", "_");
  const checkName = checkFileName(name);
  if (checkName) {
    res.send({
      msg: "Interviewee did an interview before, make sure to enter new interviewee name",
    });
  }
  if (random == '1') {
    x = generateRandomQuestions();

    beginner = x.beginner;
    intermediate = x.intermediate;
    advanced = x.advanced;
  }
  const checkQuestions = validateQuestions(beginner, intermediate, advanced);

  beginner = stringToArr(beginner);
  intermediate = stringToArr(intermediate);
  advanced = stringToArr(advanced);
  if (!checkQuestions)
    return res.send({
      msg: "Invalid Questions Criteria !",
    });

  q["Beginner"] = getQuestions("Beginner", beginner);
  q["Intermediate"] = getQuestions("Intermediate", intermediate);
  q["Advanced"] = getQuestions("Advanced", advanced);

  // Generate markdown file
  let filePath = generateMarkdownFile(q, name, interviewer_name);
  filePath = filePath.replace(/\\/g, "/");
  return res.send({ status: 200, filePath: filePath, msg: q });
});

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
