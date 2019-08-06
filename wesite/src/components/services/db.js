var MongoClient = require( 'mongodb' ).MongoClient;
var _db;
module.exports = {
  connectToServer: function( callback ) {
    MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
  		if (err) return console.log(err)
	      	_db = client.db('nodejs') // whatever your database name is
	    return callback( err );
    } );
  },
  getDb: function() {
    return _db;
  }
};