const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactions');


router.get('/:id', transactionController.getAllTransactionsByID);

router.get('/', transactionController.getAllTransactions);

module.exports = router;