const orderModel = require("../models/order.model");

// Create final order
exports.createFinalOrder = async (req, res) => {
  try {
    const order = await orderModel.create(req.body);
    res.json({ success: true, order });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating final order");
  }
};

// Get single order by ID
exports.getOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;
    
    const order = await orderModel.findOne({ 
      $or: [
        { orderId: orderId },
        { _id: orderId }
      ]
    });

    if (!order) {
      return res.status(404).json({ 
        success: false, 
        message: "Order not found" 
      });
    }

    res.json({ success: true, order });
  } catch (error) {
    console.error("Error fetching order:", error);
    res.status(500).json({ 
      success: false, 
      message: "Error fetching order" 
    });
  }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await orderModel.find().sort({ createdAt: -1 });
    res.json({ success: true, orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ success: false, message: "Error fetching orders" });
  }
};

// Get user's orders
exports.getUserOrders = async (req, res) => {
  try {
    // For now, return all orders sorted by newest first
    const orders = await orderModel.find().sort({ createdAt: -1 });
    res.json({ success: true, orders });
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ success: false, message: "Error fetching orders" });
  }
};

// Update order status
exports.updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const order = await orderModel.findOneAndUpdate(
      { orderId: orderId },
      { status: status },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.json({ success: true, order });
  } catch (error) {
    console.error("Error updating order status:", error);
    res.status(500).json({ success: false, message: "Error updating order" });
  }
};