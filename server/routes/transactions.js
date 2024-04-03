const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactions');


router.get('/', transactionController.getAllTransactions);
//router.get('/todos/:id', todoController.getTodoById);

module.exports = router;