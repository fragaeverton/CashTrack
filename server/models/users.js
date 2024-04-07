const executeQuery = require("./database");

class User {
    constructor(id, firstName, lastName, email, password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    static getUser(row){
        return new Group(row.id, row.firstName, row.lastName, row.email, row.password);
    }
}

module.exports = User;