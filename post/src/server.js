var express = require('express');
var app = express();
var fs = require('fs');
const bodyParser = require("body-parser");
var mysql = require('mysql');

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());


/**  HANDLE CROSS ORIGIN ISSUES  */

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testproject"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


/** GET ALL BOOKS */

app.get('/books',function(req,res)
{

  con.query("select * from books", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
    res.json(result)
  });
   //let jsonData = JSON.parse(fs.readFileSync('books.json', 'utf-8')) //reading from filesystem
   //res.json(jsonData)
})

/** ADD BOOK AND WRITE TO JSON FILE AND RETURN CURRENT ADDED BOOK **/
app.post('/books/add',function(req,res){
	console.log("wwww");
    var pushdata = req.body
   console.log(pushdata.title);
   /*var sql = "INSERT INTO books (book_name, author , description , count) VALUES ('"+pushdata.book_name+"', '"+pushdata.author+"' , '"+pushdata.description+"' , '"+pushdata.count+"')";
   con.query(sql, function (err, result) {
     if (err) throw err;
     console.log("1 record inserted");
     return res.json(pushdata)
   }); */
   /*const data = fs.readFileSync('books.json');
   const json = JSON.parse(data);
   if(!!json && json.length >= 1){
      pushdata._id = parseInt(json[json.length-1]._id+1)
   }else{
    pushdata._id = 1;
   }
   json.push(pushdata);
   const jsonString = JSON.stringify(json)
      fs.writeFile('books.json', jsonString, err => {
    if (err) {
        return res.json({stauts:400})
    } else {
      //let jsonData = JSON.parse(fs.readFileSync('books.json', 'utf-8'));
      return res.json(pushdata)
    }
      })*/
})

/** UPDATE BOOK AND WRITE TO JSON FILE AND RETURN CURRENT UPDATED BOOK */
app.post('/books/update/:_id',function(req,res){
   
   const _id = parseInt(req.params._id);
   const pushdata = req.body;
   pushdata._id = _id;
   
   console.log(pushdata.book_name);
   var sql = "Update books set book_name = '"+pushdata.book_name+"', author = '"+pushdata.author+"', description = '"+pushdata.description+"' , count =  '"+pushdata.count+"' where book_id = '"+pushdata._id+"' ";
   con.query(sql, function (err, result) {
     if (err) throw err;
     console.log("1 record inserted");
     return res.json(pushdata);
   });



   /*const data = fs.readFileSync('books.json');
   var jsonarray = JSON.parse(data);
   for (var i = 0; i < jsonarray.length; i++) {
      
      if (jsonarray[i]._id === parseInt(_id)) {
       
        jsonarray[i] = req_data;
      }
    }
   
   const jsonString = JSON.stringify(jsonarray)
      fs.writeFile('books.json', jsonString, err => {
    if (err) {
      return res.json({stauts:400})
    } else {
      let jsonData = JSON.parse(fs.readFileSync('books.json', 'utf-8'));
      return res.json(jsonData)
    }
      })*/
})

/** VIEW BOOK */
app.get('/books/viewbook/:_id',function(req,res){
  const _id = parseInt(req.params._id);
  const data = fs.readFileSync('books.json');
  var jsonarray = JSON.parse(data);
 
  for (var i = 0; i < jsonarray.length; i++){
 
    if (jsonarray[i]._id == _id){
      return  res.json(jsonarray[i])
    }
  }
 
})


/** DELETE CURRENT BOOK */
app.get('/books/delete/:_id',function(req,res){
   
  var req_id = req.params._id;

   var sql = "delete from books  where book_id = '"+req_id+"' ";
   con.query(sql, function (err, result) {
     if (err) throw err;
     console.log("1 record inserted");
     return res.json({status:200});
   });

  /*const data = fs.readFileSync('books.json');
  var jsonarray = JSON.parse(data);
   jsonarray = jsonarray.filter(function( obj ) {
    return obj._id !== parseInt(req_id);
    });

   const jsonString = JSON.stringify(jsonarray);
     fs.writeFile('books.json', jsonString, err => {
   if (err) {
    return res.json({stauts:400})
   } else {
     let jsonData = JSON.parse(fs.readFileSync('books.json', 'utf-8'));
     return res.json(jsonData)
   }
     })*/
})


/** LISTEN ON PORT NUMBER 8080 */

var server = app.listen('8090',function(req,res){
   var host = server.address().address
   var port = server.address().port

   console.log("App listening at http:://%s:%s", host, port);
})


