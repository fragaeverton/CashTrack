const express = require('express');
const router = express.Router();
const billController = require('../controllers/bills');

router.get('/:id', billController.getAllBillsByID);

router.get('/', billController.getAllBills);
//router.get('/todos/:id', todoController.getTodoById);

module.exports = router;