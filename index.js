// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
// TODO: Create an array of questions for user input
function generateQuestions(pairs) {
  
}
const questions = [ { 
    name: "Title", 
    type: "input", 
    message: "What's the project title?",
},
{
    name: "description", 
    type: "input", 
    message: "What's the project description?", 
},
{
    name: "installation",
    type: "input",
    message: "Whats the project installation instructions?",
},
{ 
    name: "contributing",
    type: "input",
    message: "Whats the project contributing guidelines?",
},
{
    name: "tests",
    type: "input",
    message: "What's the project tests instructions?",
},
{
    name: "usage",
    type: "input",
    message: "Whats the project usage information?",
}
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answer) => {
      const readme = `
  # ${answer.Title}
  
  ## Description
  ${answer.description}

  ## Table of Contents
  -[Description](#description)
  -[Installation](#installation)

  ## Instalattion
  \`\`\`
  ${answer.installation}
  \`\`\`
  ## Usage 
  ${answer.usage}
  
  ## License
  ${answer.license}
  
  ## Contributing
  ${answer.contributing}
  
  
  `
      let lines = `\n\n`;
  
      let links = '## Table of Contents\n\n';
      let sections = '';
      for (const section in answer.section) {
        if (answer.section[section] !== '') {
          links += `- [${section}](#${section.toLowerCase()})\n`;
          sections += `## ${section}\n`;
          sections += `${answer.section[section]}\n\n`;
        }
      }
  
      lines += links + '\n' + sections;
  
      writeToFile('README.md', lines);
    }
  
                                      }
  function writeToFile(fileName, data) {
    try {
      fs.writeFileSync(fileName, data);
  
    } catch (err) {
      console.error(err);
    }
  }
  // Function call to initialize app
  init();