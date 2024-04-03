const express = require('express');
require('dotenv').config();
const transactionRoutes = require('./routes/transactions');

const app = express();


// Other middleware and configurations...

// Mounting todo routes
app.use('/api/transactions', transactionRoutes);

// Other routes and middleware...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});