const executeQuery = require("./database");

class Group {
    constructor(id, name, _class, isActive) {
        this.id = id;
        this.name = name;
        this.isActive = isActive;
        this.class = _class;
    }


    static async getAll() {
        const query = 'SELECT * FROM groups';
        const results = await executeQuery(query);
        return  await results.map(row => this.getGroup(row));
    }

    static async getByID(id) {
        const query = `SELECT * FROM groups WHERE id = ${id}`;
        const results = await executeQuery(query);
        return  await results.map(row => this.getGroup(row));
    }

    static getGroup(row){
        return new Group(row.id, row.name, row.class, row.isActive);
    }
}

module.exports = Group;