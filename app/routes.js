var csv = require("fast-csv");
var fs  = require('fs');
var path = require("path")
var mime = require('mime');


module.exports = function(app) {
  app.get('/', function(req, res) {
       res.render('index.ejs',  { }); // load the index.ejs file
   });
   // Website endpoinsts for html demos
   app.get('/generateCSV', function(req,res)
 {
   res.render('csv.ejs', {});
 });
 /*
 app.get('/generateTSV', function(req,res)
 {
   res.render('tsv.ejs', {});

 });*/
 // API endpoinsts for POST
 app.post('/generateCSV', function(req,res)
{

  var CSV_STRING = '';
  // Database query from user
  var query = req.body.query;
  console.log(path.join(__dirname,"../data.csv"));

  var ws = fs.createWriteStream("data.csv");
 /*csv
    .write([
        {a: "a1", b: "b1"},
        {a: "a2", b: "b2"}
    ], {headers: true})
    .pipe(ws);
*/
csv
 .writeToPath("my.csv", [
     ["a", "b"],
     ["a1", "b1"],
     ["a2", "b2"]
 ], {headers: true})
 .on("finish", function(){
     console.log("done!");
     res.status(200);
     var mimetype = mime.lookup(path.join(__dirname,"../my.csv"));

     res.setHeader('Content-disposition', 'attachment; filename=my.csv');
      res.setHeader('Content-type', mimetype);

      res.sendFile(path.join(__dirname,"../my.csv"));
 });

  //  res.setHeader("Content-Type", mime.lookup(url)); //Solution!


});
/*app.post('/generateTSV', function(req,res)
{
  res.status(200)
  res.send('ok');

});
*/
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
