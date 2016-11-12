module.exports = function(app) {
  app.get('/', function(req, res) {
       res.render('index.ejs',  { }); // load the index.ejs file
   });
   // Website endpoinsts for html demos
   app.get('/generateCSV', function(req,res)
 {

 });
 app.get('/generateTSV', function(req,res))
 {


 });
 // API endpoinsts for POST
 app.post('/generateCSV', function(req,res)
{

});
app.post('/generateTSV', function(req,res))
{


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
