const mongoose = require("mongoose")

const Languages = new mongoose.Schema({
    name: { type: String, required: true },
  }, {timestamps:true});
  
  module.exports = mongoose.model('Languages', Languages);