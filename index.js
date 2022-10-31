// TODO: Include packages needed for this application

const { default: inquirer } = require("inquirer");

// TODO: Create an array of questions for user input
const sections = ['description', 'installation','usage', 'contributing',
'tests', 'questions'];
const questions = [ { 
    name: "title", 
    type: "input", 
    message: "What's the project title?", },
    {
    name: "section.description", 
    type: "input", 
    message: "What's the project description?", 
},
{
    name: "section.installation",
    type: "input",
    message: "Whats the project installation instructions?",
},
{ 
    name: "content.contributing",
    type: "input",
    message: "Whats the project contributing guidelines?",
},
{
    name: "content.tests",
    type: "input",
    message: "What's the project tests instructions?",
},
{
    name: "content.usage",
    type: "input",
    message: "Whats the project usage information?",
}
];

inquirer.prompt(questions).then((answer)
=>console.log(answer);
    let lines = [`# ${answer.Title}\n`];
    const links = '';
    const section = '';
    for (const section in answer.section) {

    if (answer.section[section] !== '')
{
    
  
console.log (lines);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
