const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const makeHTML = require('./makeHTML');

const teamMembers = [];
const idArray = [];

function promptAddTeamMember() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'teamMemberType',
      message: 'Which type of team member would you like to add?',
      choices: ['Manager', 'Engineer', 'Intern', 'None - I am done adding team members']
    }
  ])
  .then(answer => {
    switch (answer.teamMemberType) {
      case 'Manager':
        promptManager();
        break;
      case 'Engineer':
        promptEngineer();
        break;
      case 'Intern':
        promptIntern();
        break;
      case 'None - I am done adding team members':
        createHTML();
        break;
    }
  });
}

let managerAnswers;
let engineerAnswers;
let internAnswers;

function promptManager() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the Manager's name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the Manager's ID?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the Manager's email address?",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the Manager's office number?",
    },
  ])
  .then(answers => {
    managerAnswers = answers;
    const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
    teamMembers.push(manager);
    promptAddTeamMember();
  });
}

function promptEngineer() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'id',
      message: "What is the Engineer's id?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the Engineer's email address?",
    },
    {
      type: 'input',
      name: 'GitHub',
      message: "What is the Engineer's GitHub username?",
    },
  ])
  .then(answers => {
    engineerAnswers = answers;
    const engineer = new Engineer(engineerAnswers.id, engineerAnswers.email, engineerAnswers.GitHub);
    teamMembers.push(engineer);
    promptAddTeamMember();
  });
}

function promptIntern() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'id',
      message: "What is the Intern's ID?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the Intern's email address?",
    },
    {   
      type: 'input',
      name: 'school',
      message: "What is the Intern's school?",
     },
  ])
  .then(answers => {
    internAnswers = answers;
    const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
    teamMembers.push(intern);
    promptAddTeamMember();
  });
}

function createHTML() {
  

  const outputHtml = makeHTML(teamMembers);
  fs.writeFile('output/team.html', outputHtml, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

promptAddTeamMember();

     
