const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: {
    amount: Number,
    currency: { type: String, default: "INR" }
  }
});

module.exports = mongoose.model("Product", productSchema);