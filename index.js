// TODO: Include packages needed for this application
const inquirer = require ("inquirer");
const fs = require ("fs");
// TODO: Create an array of questions for user input
function generateQuestions(pairs) {
  
}
const questions = [ { 
    name: "title", 
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
},
{
        name: "license",
        type: "list",
        message: "What's the project license?",
        choices: ['None', 'MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3'],
        default: "None"
      },
        {
        name: "questions.github",
        type: "input",
        message: "What's your GitHub?",
      },
        {
        name: "questions.email",
        type: "input",
        message: "What's your email?",
      }
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answer) => {
      const readme = `
  # ${answer.title}
  
  [![License](https://img.shields.io/badge/license-${answer.license}-green)](./LICENSE)
  ## Description
  ${answer.description}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - []
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
  
  ## Tests
  \`\`\`
  ${answer.tests}
  \`\`\`
  
  ## Questions
  - [GitHub](https://www.github.com/${answer.questions.github})
  - [Email](${answer.questions.email})
  `
      writeToFile('README.md', readme);
     });
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
  