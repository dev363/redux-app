// server.js

const express = require('express');  
var ObjectId = require('mongodb').ObjectID;
const path = require('path');
const fileUpload = require('express-fileupload');
var cors = require('cors')

var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

var db = require( './db' );
const users = require('./user');
const products = require('./products');

const app = express();  
const port = process.env.PORT || 8050;
var bodyParser=require('body-parser');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({uriDecodeFileNames:true}));
app.use(express.static(path.join(__dirname, 'uploads')));

app.get('/', function(req,res){
  res.json({status:200, message:"Api working"});
  res.end();
});
// Admin Login post data
app.post('/login', function(req, res) {
  user={email:req.body.username,password:req.body.password}
  users.login(user,function(err,result){
    if(err) res.status(404).json({message:"Not found"});
    if(result)
      res.send({user:result});
    else
      res.status(404).send({user:[],message:"No User data"});
  });
});

// Logout Admin
app.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
});

// Get All Products details
app.get('/get-all-product',
  function(req, res) {
    products.getProducts(null,function(err,result){
      if(err) res.status(404).send({message:"No data"});
      res.send({products:result});
  });

});

// Add/Update product
app.post('/add-product', function(req, res) {
  let product=req.body;

  if(req.files){
    const imageFile = req.files.image;
    imageFile.mv(`./uploads/${req.body.time}.jpg`, function(err) {
      if (err) {
        res.status(404).send({message:"image not upload"});
      }
    });
    product.image=`${req.body.time}.jpg`;
  }

  if(req.body._id){

    let id={_id:ObjectId(req.body._id)};
    delete product._id;

    products.updateOne(id,product, function(err, result) {
      if (err) { 
        req.flash('error', 'Product not update.') ;
      }
    });

  }else{
    products.insertOne(product, function(err, result) {
      if (err) { 
        res.status(404).send({message:'Product not added.'}) ;
      }else{
        res.status(200).send({message:'Product added successfully.'});
      }
    });
  }
});

// delte product 
app.get('/del-product/:id',
  function(req, res) {
    products.deleteOne({_id:ObjectId(req.params.id)},function(err,result){
      if(err) res.send({message:"Product not deleted."});
      res.send({message:"Product deleted successfully."})
    });
});

db.connectToServer( function( err ) {
  const server = app.listen(port, function() {  
    console.log('Server listening on port ' + port);
  });
})
