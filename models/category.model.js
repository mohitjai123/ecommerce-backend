const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
    name: String,
    description: String,
    created_at: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('Category', CategorySchema);