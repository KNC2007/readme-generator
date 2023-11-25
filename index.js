// GIVEN a command-line application that accepts user input
// intro and instructions
console.log('Welcome to the README generator! Answer the questions to create your Professional README.')

// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer")

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// WHEN I am prompted for information about my application repository
function init() {
    // ask the questions here 
    // THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    let responses = {
        title: "Turtle"




    }
    console.log(generateMarkdown(responses))
}
inquirer
  .prompt([
    /* Pass your questions in here */
    // WHEN I enter my project title
    {
        type: 'input',
        name: 'titleAns',
        message: 'What is the title of your project?',
    },
    // WHEN I enter a description
    {
        type: 'input',
        name: 'descriptionAns',
        message: 'Write a description for your project.',
    },
    // WHEN I enter installation instructions
    {
        type: 'input',
        name: 'installationAns',
        message: 'Write installation instructions.',
    },
    // WHEN I enter usage information
    {
        type: 'input',
        name: 'usageAns',
        message: 'Provide usage information.',
    },
    // WHEN I enter contribution guidelines
    {
        type: 'input',
        name: 'contributionAns',
        message: 'Provide contribution guidelines.',
    },
    // WHEN I enter test instructions
    {
        type: 'input',
        name: 'testAns',
        message: 'Provide test instructions.',
    },
    // WHEN I choose a license for my application from a list of options
    {
        type: 'list',
        name: 'licenseAns',
        message: 'Choose a license.',
        choices: [
            'Apache License 2.0', 
            'BSD 3-Clause', 
            'GNU General Public License v3.0', 
            'MIT License'
        ]
    },
    // WHEN I enter my GitHub username
    {
        type: 'input',
        name: 'gitHubUsernameAns',
        message: 'Provide your GitHub username.',
    },
    // WHEN I enter my email address
    {
        type: 'input',
        name: 'emailAns',
        message: 'Provide email address.',
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    console.log(answers.titleAns);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
// Function call to initialize app
init();





// THEN this is displayed as the title of the README

// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

