const pool = require("./database");
/*
pool.query("select * from transactions",(err, results)=>{
    if(err){
      return console.log(err)
    }
    return console.log(results)
  })*/

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

    static executeQuery(query, params) {
        return new Promise((resolve, reject) => {
            pool.query(query, params, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
            });
        });
    }

    static async getAll() {
        const query = 'SELECT * FROM transactions';
        const results = await this.executeQuery(query);
        return  await results.map(row => new Transaction(row.id, row.date, row.debit, row.credit, row.observation, row.isActive, row.userId, row.amount));
    }
}

module.exports = Transaction;