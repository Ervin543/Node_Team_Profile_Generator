const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


function generateHTML(managerAnswers, engineerAnswers, internAnswers) {
    const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
    const engineer = new Engineer(engineerAnswers.id, engineerAnswers.email, engineerAnswers.GitHub);
    const intern = new Intern(internAnswers.id, internAnswers.email, internAnswers.school);
    const cardsHtml = teamMembers.map((member) => {
        if (member instanceof Manager) {
            return `
            <div class="card">
            <h2>${member.getName()}</h2>
            <p>${member.getRole()}</p>
            <ul>
            <li>ID: ${member.getId()}</li>
            <li>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
            <li>Office Number: ${member.getOfficeNumber()}</li>
            </ul>
            </div>
            `;
        } else if (member instanceof Engineer) {
            return `
            <div class="card">
            <h2>${member.getName()}</h2>
            <p>${member.getRole()}</p>
            <ul>
            <li>ID: ${member.getId()}</li>
            <li>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
            <li>GitHub: <a href="https://github.com/${member.getGithub()}">${member.getGithub()}</a></li>
            </ul>
            </div>
            `;
        } else if (member instanceof Intern) {
            return `
            <div class="card">
            <h2>${member.getName()}</h2>
            <p>${member.getRole()}</p>
            <ul>
            <li>ID: ${member.getId()}</li>
            <li>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
            <li>School: ${member.getSchool()}</li>
            </ul>
            </div>
            `;
        }
    });
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="./style.css">
    </head>
    <body>
    <header>
    <h1>My Team</h1>
    </header>
    <main>
    <div class="cards-container">
    ${cardsHtml.join('')}
    </div>
    </main>
    </body>
    </html>
    `;
}

module.exports = generateHTML;