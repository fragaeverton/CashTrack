const mysql = require('mysql');
const { errorConnect } = require('../errorHandler');

const pool = mysql.createPool({
  connectionLimit: 10,        
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
});


pool.getConnection((err) => {
  if (err) {
    errorConnect(err, 'Error connecting to MySQL database:');
    return;
  }
  console.log('Connected to MySQL database');
});


function executeQuery(query, params) {
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

module.exports = executeQuery;
