// GIVEN a command-line application that accepts user input
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// intro and instructions
console.log('Welcome to the README generator! Answer the questions to create your Professional README.')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Successfully created README.md')
    );
}

// TODO: Create a function to initialize app
// WHEN I am prompted for information about my application repository
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput),
            writeToFile('README.md', generateMarkdown(userInput));
    }
    );

};

// console.log(generateMarkdown(data))


// Function call to initialize app
init();







// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

