const mongoose = require('mongoose')
const Schema = mongoose.Schema

const connectionSchema = new Schema({
  product: { type: String, unique: true },
  description: String,
  category: { type: String, unique: true },
  price: Number
});

module.exports = mongoose.model('connection', connectionSchema);