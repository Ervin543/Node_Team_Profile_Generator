// intern class properties //

// name
// id
// email
// getName()
// getId()
// getEmail()
// school
// getSchool()
// getRole() // Returns 'Intern'

const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;