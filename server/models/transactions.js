const executeQuery = require("./database");

class Transaction {
    constructor(id, date, debit, credit, observation, isActive, userId, amount) {
        this.id = id;
        this.debit = debit;
        this.credit = credit;
        this.amount = amount;
        this.observation = observation;
        this.isActive = isActive;
        this.userId = userId;
        this.date = date;
    }

    static async getAll() {
        const query = 'SELECT * FROM transactions';
        const results = await executeQuery(query);
        return  await results.map(row => this.getTransaction(row));
    }

    static async getByID(id) {
        const query = `SELECT * FROM transactions WHERE id = ${id}`;
        const results = await executeQuery(query);
        return  await results.map(row => this.getTransaction(row));
    }

    static getTransaction(row){
        return new Transaction(row.id, row.date, row.debit, row.credit, row.observation, row.isActive, row.userId, row.amount);
    }
}

module.exports = Transaction;