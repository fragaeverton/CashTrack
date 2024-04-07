const executeQuery = require("./database");

class Transaction {
    constructor(id, date, debit, credit, observation, isActive, userId, amount, bill) {
        this.id = id;
        this.debit = debit;
        this.credit = credit;
        this.amount = amount;
        this.observation = observation;
        this.isActive = isActive;
        this.userId = userId;
        this.date = date;
        this.bill = bill;
    }

    static async getAll() {
        const query = `
        SELECT 
            t.*, 
            debit_account.name AS debit_account_name, 
            credit_account.name AS credit_account_name 
        FROM 
            transactions t 
        JOIN 
            bills AS debit_account ON t.debit = debit_account.id 
        JOIN bills AS credit_account ON t.credit = credit_account.id;`;

        const results = await executeQuery(query);
        return  await results.map(row => this.getTransaction(row));
    }

    static async getByID(id) {
        const query = `SELECT * FROM transactions WHERE id = ${id}`;
        const results = await executeQuery(query);
        return  await results.map(row => this.getTransaction(row));
    }

    static getTransaction(row){
        const bill = { debitName: row.debit_account_name, creditName: row.credit_account_name };
        return new Transaction(row.id, row.date, row.debit, row.credit, row.observation, row.is_active, row.user_id, row.amount, bill);
    }
}

module.exports = Transaction;