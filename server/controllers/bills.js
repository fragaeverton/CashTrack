const { errorRequest } = require('../errorHandler');

const handleAsync = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((error) => {
        errorRequest(res, error, 'Error fetching transactions:');
    });
};
  
const Bill = require('../models/bills');

const billController = {
    getAllBills: handleAsync(async (req, res) => {
        res.json(await Bill.getAll());
    }),

    getAllBillsByID: handleAsync(async (req, res) => {
        res.json(await Bill.getByID(req.params.id));
    })
};

module.exports = billController;