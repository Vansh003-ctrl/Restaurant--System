const Razorpay = require("razorpay");
const paymentModel = require("../models/payment.model");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// -------- CREATE ORDER --------
exports.createOrder = async (req, res) => {
  try {
    const { amount } = req.body;
    
    // Amount must be in paise (multiply by 100)
    const options = {
      amount: Math.round(amount * 100), // ₹100 = 10000 paise
      currency: "INR",
      receipt: "order_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);
    res.json({ order });
  } catch (error) {
    console.error("Order creation error:", error);
    res.status(500).json({ error: error.message });
  }
};

// -------- VERIFY PAYMENT --------
exports.verifyPayment = async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  } = req.body;

  try {
    const crypto = require("crypto");
    const secret = process.env.RAZORPAY_KEY_SECRET;

    let body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(body.toString())
      .digest("hex");

    const isValid = expectedSignature === razorpay_signature;

    if (!isValid) {
      return res.status(400).json({ success: false, message: "Invalid signature" });
    }

    // Update DB
    await paymentModel.findOneAndUpdate(
      { orderId: razorpay_order_id },
      {
        paymentId: razorpay_payment_id,
        signature: razorpay_signature,
        status: "completed",
      }
    );

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send("Payment verification failed");
  }
};