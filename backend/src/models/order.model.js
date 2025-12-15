const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderId: { type: String, required: true },
    tableNumber: String,
    items: [{
      name: String,
      quantity: Number,
      price: Number,
      image: String,
      instructions: String
    }],
    instructions: String,
    subtotal: Number,
    tax: Number,
    total: Number,
    itemCount: Number,
    paymentId: String,
    paymentOrderId: String,
    status: { 
      type: String, 
      enum: ['Pending', 'Preparing', 'Cooking', 'Ready', 'Completed', 'Cancelled'],
      default: 'Pending'
    },
    timestamp: Date
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);