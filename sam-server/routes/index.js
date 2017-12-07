var express = require('express'); 
var router = express.Router(); 
var sql = require('mssql'); 

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index',  {title:'Express'}); 
}); 


// SQL Server config
var config =  {
user:'SAM_User', 
password:'SAM_User', 
server:'eb2ts-sql05', 
database:'dmm'
}; 


router.get('/datamart', function (req, res) {
console.log('calling api..'); 

// connect to your database
sql.connect(config, function (err) {
if (err)console.log(err); 

// create Request object
var request = new sql.Request(); 

// query to the database and get the data
request.execute('dbo.get_datamart', function (err, result) {
if (err)console.log(err)

// send data as a response
console.log(result.recordset.columns);
res.send(result); 

sql.close();
}); 
}); 

}); 

module.exports = router; 
