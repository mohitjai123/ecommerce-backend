const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  add_to_cart: { type: [mongoose.Schema.Types.Mixed], default: [] },
  adresses: { type: [mongoose.Schema.Types.Mixed], default: [] }
}, {timestamps:true});

module.exports = mongoose.model('User', UserSchema);
