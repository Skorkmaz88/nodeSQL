var csv = require("fast-csv");
var fs  = require('fs');
var path = require("path")
var mime = require('mime');


module.exports = function(app,connection) {
  app.get('/', function(req, res) {
       res.render('index.ejs',  { }); // load the index.ejs file
   });
   // Website endpoinsts for html demos
   app.get('/generateCSV', function(req,res)
 {
   console.log(connection.threadId);
   res.render('csv.ejs', {});
 });

 // API endpoinsts for POST
 // Get all deparment managers, select * example
 app.post('/generateCSV/departmentManagers', function(req,res)
{

  var CSV_STRING = '\uFEFF';
  // Database query from user
  var query = req.body.query;
  console.log(path.join(__dirname,"../data.csv"));

  var ws = fs.createWriteStream("data.csv");
  var dataArray = [];
  connection.query('SELECT * FROM employees.dept_manager', function(err, rows, fields) {
  if (err) throw err;

   //TODO add fields to headers ?
   // prepare the csv

   //var data = JSON.parse(rows);

   for(var i = 0; i < rows.length; i++)
   {
     if(i === 0)
     {

        dataArray.push([""+rows[i].emp_no, rows[i].dept_no ]);
     }
     else
         dataArray.push([""+rows[i].emp_no, rows[i].dept_no ]);
      CSV_STRING += rows[i].emp_no +"," + rows[i].dept_no+"\n";
   }
   csv
    .writeToPath("my.csv", dataArray, {headers: true})
    .on("finish", function(){
        console.log("done!");
        console.log(dataArray[0][0]);
        res.status(200);
        var mimetype = mime.lookup(path.join(__dirname,"../my.csv"));

        res.setHeader('Content-disposition', 'attachment; filename=my.csv');
        res.setHeader('Content-type', mimetype);

         res.sendFile(path.join(__dirname,"../my.csv"));
    });


   });



});

}

/////////////////////////////////////////
// Helper functions
/////////////////////////////////////////
// adds header, returns the header line as String.
function headerGenerator(headers)
{


}
function dataRetrieval(query)
{


}
