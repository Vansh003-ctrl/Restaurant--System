const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  orderId: String,
  paymentId: String,
  signature: String,
  status: {
    type: String,
    enum: ["pending", "completed", "failed"],
    default: "pending"
  },
  price: {
    amount: Number,
    currency: String
  }
});

module.exports = mongoose.model("Payment", paymentSchema);