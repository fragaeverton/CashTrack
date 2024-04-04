const executeQuery = require("./database");

class Bill {
    constructor(id, name, groupId, isActive, userId) {
        this.id = id;
        this.name = name;
        this.isActive = isActive;
        this.userId = userId;
        this.groupId = groupId;
    }


    static async getAll() {
        const query = 'SELECT * FROM bills';
        const results = await executeQuery(query);
        return  await results.map(row => this.getBill(row));
    }

    static async getByID(id) {
        const query = `SELECT * FROM bills WHERE id = ${id}`;
        const results = await executeQuery(query);
        return  await results.map(row => this.getBill(row));
    }

    static getBill(row){
        return new Bill(row.id, row.name, row.groupId, row.isActive, row.userId);
    }
}

module.exports = Bill;