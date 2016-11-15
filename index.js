// We use mysqljs library for establishing the connection
// and retrive the data (https://github.com/mysqljs)
var express    = require('express');
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var app        = express();
var port       = process.env.PORT || 3000;


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

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

// Set the server
// get information from html forms
app.use(bodyParser());

// set up ejs for templating
app.set('view engine', 'ejs');

require('./app/routes.js')(app,connection);



var webServer = app.listen(port);
console.log('Server is running using port :' + port);
