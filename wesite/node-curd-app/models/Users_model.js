import User from "../schema/User"
import mongoose from "mongoose";
import fs from 'fs';
import randomstring from 'randomstring';
import {fileRoute} from '../config/config';

module.exports = class Users_model{

  // Check User already available or not
   checkIsAval(data,cb){
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
	}

  // Get user's results
  getResults(data,cb){
   User.find(data)
     .exec()
     .then(records =>{
       if(records.length !== 0){
           return cb({status:200,data:records})
       }else{
           return cb({status:404,message:"wrong details."});
       }
     })
     .catch(err => {
         return cb({status:404,message:"wrong details."});
     });
 }

 // Add new user
 async save(data,cb){
		let profilePic;
		await this.uploadProfilePic(data.profile_pic_url).then(res=>{profilePic=res}) // save profile picture
		const user = new User({
	        _id: mongoose.Types.ObjectId(),
	        Fname: data.first_name,
	        Lname: data.last_name,
	        email: data.email,
	        profilePic: profilePic,
	        password:data.password
	    });

	    user.save()
	    .then(result => {
	        return cb({status:200,data:user[0]})
	    })
	    .catch(err => {
	        return cb({status:404,message:"User not saved."});
	    });

	}

  // save image's files
	uploadProfilePic(base64url){
		return new Promise(function(resolve, reject) {
			let base64Image = (base64url).split(';base64,').pop();
	    	let fileName= randomstring.generate(21);
	    	fs.writeFile(`${fileRoute}profile-pic/${fileName}`, base64Image, {encoding: 'base64'}, function(err) {
	    		if(err) resolve ("default");
		        resolve (fileName);
		    })
    	});
	}

}
