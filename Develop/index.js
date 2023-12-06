// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is the application used?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'GPL', 'Apache', 'None'],
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md generated successfully!')
  );
}

// function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // Generate README content based on user input
    const readmeContent = `
# ${answers.title}

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

## License
This application is covered under the ${answers.license} license.

## Questions
For additional questions, you can reach me through:
- GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
- Email: ${answers.email}
`;

    // Write the README file
    writeToFile('README.md', readmeContent);
  });
}

// Function call to initialize app
init();
