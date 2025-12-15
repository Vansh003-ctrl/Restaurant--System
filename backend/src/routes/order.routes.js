const express = require("express");
const { 
  createFinalOrder, 
  getOrderById, 
  getAllOrders,
  getUserOrders,
  updateOrderStatus 
} = require("../controllers/order.controller");

const router = express.Router();

// Routes
router.post("/final-order", createFinalOrder);
router.get("/all-orders", getAllOrders);
router.get("/user-orders", getUserOrders);
router.patch("/:orderId/status", updateOrderStatus);
router.get("/:orderId", getOrderById);  // Keep this last to avoid conflicts

module.exports = router;