// A function that returns a license badge based on which license is passed in
// If there is no license, an empty string is returned
function renderLicenseBadge(license) {
  if(license == "None") {
    return "";
  } else {
    return `![license](https://img.shields.io/badge/LICENSE-${license}-blue)`
  }
}

// A function that returns the license link
// If there is no license, an empty string is returned
function renderLicenseLink(license) {
 
  if(license == "MIT") {
    return "https://opensource.org/license/mit-0/"
  }

  else if(license == "GPL") {
    return "https://opensource.org/license/gpl-2-0/"
  }

  else if(license == "Apache") {
    return "http://www.apache.org/licenses/LICENSE-2.0"
  }

  else {
    return "";
  }
}

// A function that returns the license section of README
// If there is no license, an empty string is returned
function renderLicenseSection(license) {
  if(license == "None") {
    return "";
  } else {
    return `
  ## License
  This application is covered under the ${license} license.
  Link: ${renderLicenseLink(license)}
  `
  }
}

// A function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}
  ${renderLicenseBadge(answers.license)}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ${renderLicenseSection(answers.license)}
  
  ## Questions
  For additional questions, you can reach me through:
  - GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
  - Email: ${answers.email}
  `;
}

module.exports = generateMarkdown;
