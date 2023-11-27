// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README - outputs README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.descriptionAns}
  
  ## License Badge
  ${data.licenseAns}

  ## Table of Contents
  1. [Installation] (#Installation)
  2. [Usage] (#Usage%20Information)
  3. [License] (#License)
  4. [Contributing] (#Test%20Instructions)
  5. [Tests] (#Test%20Instructions)
  6. [Questions] (#Questions)

  ## Installation
  ${data.installationAns}

  ## Usage Information
  ${data.usageAns} 

  ## License
  License used for this project is ${data.licenseAns}.
  * For more information on license types, please reference this website [https: //choosealicense.com/](https://choosealicense.com/).

  ## Contributing 
  ${data.contributionAns}

  ## Test Instructions
  ${data.testAns} 

  ## Questions
  * GitHub Username: ${data.gitHubUsernameAns}
  * [Click here to access me GitHub Profile] (${data.gitHubProfileLink})
  * To reach me for additional question, please email me at: ${data.emailAns}
`;
}

module.exports = generateMarkdown;
