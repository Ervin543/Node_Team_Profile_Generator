// engineer class properties //

// name
// id
// email
// getName()
// getId()
// getEmail()
// github // GitHub Username
// getGithub()
// getRole() // Returns 'Engineer'

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    
   getGitHub() {
    return this.github;
   }

   getRole() {
    return 'Engineer';
   }

}

module.exports = Engineer;