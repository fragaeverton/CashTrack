const pool = require("./database");

const getTransactions = () => pool.query('SELECT * FROM transactions');

module.exports = {
    getTransactions
}
