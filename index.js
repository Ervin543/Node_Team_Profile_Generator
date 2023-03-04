const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateHTML = require('./generateHTML');





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
        promptAddTeamMember();
      });
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
      ])
      .then(answers => {
        engineerAnswers = answers;
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
          message: "What school did the Intern attend?",
        },
      ])
      .then(answers => {
        internAnswers = answers;
        promptAddTeamMember();
      });
  };
  
  function generateHTML(teamMembers) {
      const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
      const engineer = new Engineer(engineerAnswers.id, engineerAnswers.email, engineerAnswers.GitHub);
      const intern = new Intern(internAnswers.id, internAnswers.email, internAnswers.school);
  

  };
  
  
  
  
  function createHTML(teamMembers) {
    const filePath = path.join(__dirname, 'output', 'team.html');
    const htmlContent = generateHTML(managerAnswers, engineerAnswers, internAnswers);
    
    fs.writeFile(filePath, htmlContent, err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`HTML file created at ${filePath}`);
    });
  };










  
  


  