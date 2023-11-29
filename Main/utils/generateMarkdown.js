// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache License 2.0') {
    return '[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } 
  if (license == 'BSD 3-Clause') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }
  if (license == 'GNU General Public License v3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  if (license == 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  else {
    return ''
  }
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache License 2.0') {
    return 'https://choosealicense.com/licenses/apache-2.0/'
  } 
  if (license == 'BSD 3-Clause') {
    return 'https://choosealicense.com/licenses/bsd-3-clause/'
  }
  if (license == 'GNU General Public License v3.0') {
    return 'https://choosealicense.com/licenses/gpl-3.0/'
  }
  if (license == 'MIT License') {
    return 'https://choosealicense.com/licenses/mit/'
  }
  else {
    return ''
  }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README - outputs README
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseBadge(data.licenseAns)}
  
  ## Description
  ${data.descriptionAns}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage-information)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#test-instructions)
  6. [Questions](#questions)

  ## Installation
  ${data.installationAns}

  ## Usage Information
  ${data.usageAns} 

  ${renderLicenseSection(data.licenseAns)}
  * For more information about this license, click here: ${renderLicenseLink(data.licenseAns)}.

  ## Contributing 
  ${data.contributionAns}

  ## Test Instructions
  ${data.testAns} 

  ## Questions
  * GitHub Username: ${data.gitHubUsernameAns}
  * Click here to access my GitHub Profile: https://github.com/${data.gitHubUsernameAns}
  * To reach me for additional questions, please email me at: [${data.emailAns}](mailto:${data.emailAns})
`;
}

module.exports = generateMarkdown;
