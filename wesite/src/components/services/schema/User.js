let mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    address: String,
    salary : Number
});

var UserModel = mongoose.model("Love", userSchema);

module.exports = UserModel;