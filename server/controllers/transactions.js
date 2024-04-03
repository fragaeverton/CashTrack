const Transaction = require('../models/transactions');

const transactionController = {
    getAllTransactions: async (req, res) => {
        try {
            const transactions = await Transaction.getAll();
            res.json(transactions);
        } catch (error) {
            console.error('Error fetching transactions:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    // You can add more controller methods for specific operations like creating, updating, deleting transactions
};

module.exports = transactionController;