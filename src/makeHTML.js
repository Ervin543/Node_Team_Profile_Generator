const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function makeHTML(teamMembers) {
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
            <li>GitHub: <a href="https://github.com/${member.getGitHub()}" target="_blank">${member.getGitHub()}</a></li>
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
  }).join('');

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <link rel="stylesheet" href="./style.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha512-7hJ4UrE4NcN9XK0NioV7SrtY/YCFMKV7Q2wzKuM7c4zfG15uBcP9jFkxDhOrCpFtJElzjJPnGvHwwAdnp/R2bQ==" crossorigin="anonymous" />
    </head>
    <body>
      <header class="bg-danger text-white mb-3 p-3 text-center">
        <h1>My Team</h1>
      </header>

      <div class="container">
        <div class="row">
          ${cardsHtml}
        </div>
      </div>
      
    </body>
    </html>
  `;
}


module.exports = makeHTML;
