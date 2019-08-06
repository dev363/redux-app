
var mongodbutil = require( './db' );
const db = mongodbutil.getDb();

function login(user,cb){
	var db = mongodbutil.getDb();
     db.collection('users').find(user).toArray(function(err, records) {
      if(err) return cb(null, null);
      return cb(null,records[0]);
    });
}
function findByUsername(username, cb) {
	var db = mongodbutil.getDb();
	 db.collection('users').find({email:username}).toArray(function(err, records) {
	    if(err) return cb(null, null);
	      process.nextTick(function() {
	        for (var i = 0, len = records.length; i < len; i++) {
	          var record = records[i];
	          if (record.email == username) {
	            return cb(null, record);
	          }
	        }
	        return cb(null, null);
	      });
	  });
}

function findById(id, cb) {
  var db = mongodbutil.getDb();
	console.log(id);
	 db.collection('users').find().toArray(function(err, records) {
	    console.log(records)
	    if(err) return cb(null, null);
	      process.nextTick(function() {
	        var idx = id - 1;
	        if (records[idx]) {
	          cb(null, records[idx]);
	        } else {
	          cb(new Error('User ' + id + ' does not exist'));
	        }
	      });
	  });
}

function test(data,cb){
	console.log("gggg");
}



module.exports = {  
    findByUsername: findByUsername,
    findById: findById,
    login:login,
    test:test
}
