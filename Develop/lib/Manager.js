const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {

    constructor(name, id, email, officeNumber){

        super(name, id, email);
        this.officeNumber = officeNumber;
        this.name = name;
        this.id = id;
        this.email = email;

    }

    getName() {
        return this.name;
    }
    getId() {
        return this.getId
    }
    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber
    }
}

module.exports = Manager