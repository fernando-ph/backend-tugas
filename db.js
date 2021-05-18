var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'backend-tugas',
  port: 3306
})

module.exports.connection = connection;