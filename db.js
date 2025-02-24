const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Replace with your credentials
  database: 'education_x'
});

function connect() {
  return new Promise((resolve, reject) => {
    connection.connect((error) => {
      if (error) {
        reject(error);
        return;
      }
      console.log('Connected to MySQL database!');
      resolve(); // Resolve without connection object (avoid closing here)
    });
  });
}
function query(sql, callback) {
  connect()
    .then(() => {
      connection.query(sql, (error, results) => {
        callback(error, results);
      });
    })
    .catch(error => {
      console.error('Error connecting to database:', error);
      callback(error);
    });
}
// You can also define methods for specific queries like select
function select(table, columns = '*') {
  return new Promise((resolve, reject) => {
    const sql = `SELECT ${columns} FROM ${table}`;
    query(sql, (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
}

function insert(table, id, product_name, price, user_id) {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO cart (id, product_name, price, user_id) VALUES (?, ?, ?, ?)`;  // Corrected VALUES clause
    connection.query(sql, [id, product_name, price, user_id], (error, result) => {  // Use 'result' consistently
      if (error) {
        reject(error);
        return;
      }
      resolve(result);  // Consistent usage of 'result'
      console.log('Product added to cart:', result); // result contains information about the inserted row
    });
  });
}

module.exports = { select, query, insert }; // Export select and insert functions