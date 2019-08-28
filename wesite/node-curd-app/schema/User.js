import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Fname: String,
    Lname: String,
    email: String,
    profilePic: String,
    password : String
});

var UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;