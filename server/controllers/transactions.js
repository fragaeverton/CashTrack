const Transaction = require('../models/transactions');

const handleAsync = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((error) => {
        errorRequest(res, error, 'Error fetching transactions:');
    });
};

const { errorRequest } = require('../errorHandler');

const transactionController = {
    getAllTransactions: handleAsync(async (req, res) => {
        res.json(await  Transaction.getAll());
    }),

    getAllTransactionsByID: handleAsync(async (req, res) => {
        res.json(await Transaction.getByID(req.params.id));
    }),
};

module.exports = transactionController;