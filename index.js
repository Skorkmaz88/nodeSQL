// We use mysqljs library for establishing the connection
// and retrive the data (https://github.com/mysqljs)
var mysql      = require('mysql');


// Establishing the connection
// you can save this data in a safe place rather than explicitly type here
// We use an example database from MySQL developer website,
// (https://dev.mysql.com/doc/employee/en/)
var connection = mysql.createConnection({
  host     : 'localhost', // add your url if different, this is for local machine
  user     : 'root',  // your username
  password : '1234', // your password
  database : 'employees' // which database you are connecting
});

connection.connect();
