const executeQuery = require("./database");

class Bill {
    constructor(id, name, groupId, isActive, userId, group) {
        this.id = id;
        this.name = name;
        this.isActive = isActive;
        this.userId = userId;
        this.groupId = groupId;
        this.group = group;
    }

    static async getAll() {
        const query = 'SELECT b.*, g.name as groupName FROM bills b LEFT JOIN groups g ON b.group_id = g.id';
        const results = await executeQuery(query);
        return  await results.map(row => this.getBill(row));
    }

    static async getByID(id) {
        const query = `SELECT b.*, g.name as groupName FROM bills b LEFT JOIN groups g ON b.group_id = g.id WHERE b.id = ${id}`;
        const results = await executeQuery(query);
        return  await results.map(row => this.getBill(row));
    }

    static getBill(row){
        const group = { id: row.groupId, name: row.groupName };
        return new Bill(row.id, row.name, row.group_id, row.is_active, row.user_id, group);
    }
}

module.exports = Bill;