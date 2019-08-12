// let mongoose = require('mongoose')
import mongoose from "mongoose"

let emailSchema = new mongoose.Schema({
  email: String
})

module.exports = mongoose.model('Email', emailSchema)