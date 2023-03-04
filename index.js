const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');





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
          // call promptManager function
          promptManager();
          break;
        case 'Engineer':
          // call promptEngineer function
          promptEngineer();
          break;
        case 'Intern':
          // call promptIntern function
          promptIntern();
          break;
        case 'None - I am done adding team members':
          // call function to generate HTML file
          createHTML();

          break;
      }
    });
  }
  


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
    ]);
  };

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
    ]);
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
        message: "Where school did the Intern attend?",
      },
    ]);
  }

  function createHTML(teamMembers) {
    const filePath = path.join(__dirname, 'output', 'team.html');
    const htmlContent = generateHTML(teamMembers);
  
    fs.writeFile(filePath, htmlContent, err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`HTML file created at ${filePath}`);
    });
  }
  
  


  