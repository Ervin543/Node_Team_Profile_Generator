// manager class properties //

// name
// id
// email
// getName()
// getId()
// getEmail()
// officeNumber
// getRole() // Returns 'Manager'

const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;