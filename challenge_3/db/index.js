const path = require('path');

const mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Af234rew',
  database: 'sales',
  plugin: 'mysql_native_password'
});

connection.connect();

connection.query('SELECT * FROM orders', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

connection.end();

