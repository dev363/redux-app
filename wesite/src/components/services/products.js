
var mongodbutil = require( './db' );
const db = mongodbutil.getDb();

// Get all products
function getProducts(data, cb) {
	var db = mongodbutil.getDb();
	db.collection('products').find(data).toArray(function(err, records) {
	    if(err) return cb(null, null);

	    return cb(null, records);
	});
}

// InsertOne product
function insertOne(data, cb) {
	var db = mongodbutil.getDb();
	db.collection('products').insertOne(data,function(err, records) {
	    if(err) return cb(null, null);
	    return cb(null, records);
	});
}

// UpdateOne product
function updateOne(id,data, cb) {
	var db = mongodbutil.getDb();
	
	db.collection('products').updateOne(id,{$set:data},function(err, records) {
	    if(err) return cb(null, null);
	    return cb(null, records);
	});
}

// UpdateOne product
function deleteOne(id, cb) {
	var db = mongodbutil.getDb();
	
	db.collection('products').deleteOne(id,function(err, records) {
	    if(err) return cb(null, null);
	    return cb(null, records);
	});
}


module.exports = {  
    insertOne: insertOne,
    updateOne: updateOne,
    deleteOne:deleteOne,
    getProducts:getProducts
}
