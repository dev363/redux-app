import User from "../schema/User"
import mongoose from "mongoose";

module.exports = {

    checkIsAval: (data,cb) => {
		User.find(data)
	    .exec()
	    .then(records =>{
	        if(records.length !== 0){
	            return cb(true)
	        }else{
	            return cb(false)
	        }
	    })
	    .catch(err => {
	        return cb(false)
	    });
	},

	find: (data,cb) => {
		User.find(data)
	    .exec()
	    .then(records =>{
	        return cb(records)
	    })
	    .catch(err => {
	        return cb(false)
	    });
	},
uploadProfilePic: (data,cb) => {
		console.log("I m here")
	},
	save: (data,cb) => {
		
		const user = new User({
	        _id: mongoose.Types.ObjectId(),
	        Fname: data.first_name,
	        Lname: data.last_name,
	        email: data.email,
	        profilePic: "kjj",
	        password:data.password
	    });
	    console.log(user)
	    uploadProfilePic("lll")

    // user.save()
    // .then(result => {
    //     console.log("saved data")
    //     res.status(200).json({
    //         docs:[user]
    //     });
    // })
    // .catch(err => {
    //     console.log(err);
    // });
	},

	

}

class MyClass {

    constructor() {}

    foo(req, res, next) {
        return ('foo');
    }

    bar(req, res, next) {
        this.foo();
    }
}