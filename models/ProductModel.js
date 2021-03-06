const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductModelSchema = new Schema({
  product: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  category: { type: String, unique: true },
  price: { type: Number, required: true }
});

module.exports = mongoose.model('ProductModel', ProductModelSchema);