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
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    
    
    getRole() {
        return 'Engineer';
    }
    
    getGitHub() {
     return this.gitHub;
    }
    
}

module.exports = Engineer;