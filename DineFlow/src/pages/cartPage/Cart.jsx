import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import "../../style/cartPage/Cart.css";
import { MdDeleteOutline } from "react-icons/md";

const Order = () => {
  const { cartItems, updateQuantity, updateInstructions, removeFromCart, clearCart } = useCart();

  const [tableNumber, setTableNumber] = useState("Table 1");
  const [overallInstructions, setOverallInstructions] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Load Razorpay script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  /* ============================
        PRICE CALCULATIONS
     ============================ */
  const calculateSubtotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const calculateTax = () => calculateSubtotal() * 0.1;

  const calculateTotal = () => calculateSubtotal() + calculateTax();

  /* ==========================================
        ORDER CONFIRMATION AFTER PAYMENT
     ========================================== */
  const handleCheckout = async (paymentDetails = {}) => {
    const orderId = "ORD" + Date.now().toString().slice(-6);

    const details = {
      orderId,
      tableNumber,
      items: cartItems,
      instructions: overallInstructions,
      subtotal: calculateSubtotal(),
      tax: calculateTax(),
      total: calculateTotal(),
      itemCount: cartItems.reduce((sum, item) => sum + item.quantity, 0),
      timestamp: new Date().toISOString(),
      paymentId: paymentDetails.razorpay_payment_id || null,
      paymentOrderId: paymentDetails.razorpay_order_id || null,
    };

    try {
      // Save order to database
      const response = await fetch("http://localhost:3000/api/orders/final-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(details),
      });

      const result = await response.json();
      
      if (!response.ok) {
        console.error("Failed to save order. Status:", response.status);
        console.error("Response:", result);
        throw new Error(result.message || "Failed to save order");
      }

      console.log("Order saved to database:", result);

      // Clear cart
      clearCart();
      setOverallInstructions("");

      // Navigate directly to order tracking page
      window.location.href = `/order-tracking/${orderId}?data=${encodeURIComponent(JSON.stringify(details))}`;
      
    } catch (error) {
      console.error("Error saving order:", error);
      alert("Order completed but failed to save. Please contact support with Order ID: " + orderId);
      
      // Still navigate even if save fails
      clearCart();
      setOverallInstructions("");
      window.location.href = `/order-tracking/${orderId}?data=${encodeURIComponent(JSON.stringify(details))}`;
    }
  };


        // RAZORPAY PAYMENT FLOW

  const initiatePayment = async () => {
    if (isProcessing) return;

    // Validation
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Check if Razorpay is loaded
    if (!window.Razorpay) {
      alert("Payment gateway not loaded. Please refresh the page.");
      return;
    }

    // Check for Razorpay key
    const razorpayKey = "rzp_test_RmxPQX943pqyY6";
    
    
    if (!razorpayKey) {
      console.error("Razorpay key not found");
      alert("Payment configuration error. Please contact support.");
      return;
    }

    setIsProcessing(true);

    try {
      // 1. Create order on backend
      const response = await fetch("http://localhost:3000/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          amount: calculateTotal(),
          tableNumber: tableNumber,
          items: cartItems
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("ORDER CREATED:", data);

      if (!data.order || !data.order.id) {
        throw new Error("Invalid order data received from server");
      }

      // 2. Razorpay Checkout
      const options = {
        key: razorpayKey,
        amount: data.order.amount,
        currency: data.order.currency || "INR",
        name: "Graphura India Pvt. Ltd.",
        description: "Table Order Payment",
        order_id: data.order.id,

        handler: async function (response) {
          try {
            // 3. Verify payment on backend
            const verifyRes = await fetch("http://localhost:3000/api/payment/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            if (!verifyRes.ok) {
              throw new Error("Payment verification request failed");
            }

            const verifyData = await verifyRes.json();
            console.log("VERIFY RESPONSE:", verifyData);

            // Handle multiple response formats
            const isSuccess = 
              verifyData.status === "success" || 
              verifyData.success === true ||
              verifyData.verified === true ||
              verifyData.message === "Payment verified successfully" ||
              (verifyRes.ok && !verifyData.error);

            if (isSuccess) {
              // Pass payment details to handleCheckout
              await handleCheckout(response);
            } else {
              console.error("Verification failed with response:", verifyData);
              alert("Payment verification failed. Please contact support.");
            }
          } catch (error) {
            console.error("Verification Error:", error);
            alert("Payment verification failed. Please contact support with payment ID: " + response.razorpay_payment_id);
          } finally {
            setIsProcessing(false);
          }
        },

        modal: {
          ondismiss: function () {
            setIsProcessing(false);
            console.log("Payment cancelled by user");
          },
        },

        prefill: {
          name: "Customer",
          email: "customer@example.com",
          contact: "9999999999",
        },

        theme: { 
          color: "#6366f1" 
        },
      };

      const rzp = new window.Razorpay(options);
      
      rzp.on("payment.failed", function (response) {
        console.error("Payment Failed:", response.error);
        alert("Payment failed: " + response.error.description);
        setIsProcessing(false);
      });

      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Something went wrong! " + error.message);
      setIsProcessing(false);
    }
  };


        // COMPONENT JSX

  return (
    <div className="order-page">
      <div className="order-container">
        <h1 className="order-title">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h3 className="empty-cart-title">Your cart is empty</h3>
            <p className="empty-cart-text">Add some delicious items from our menu!</p>
            <a href="/menu" className="browse-menu-btn">Browse Menu</a>
          </div>
        ) : (
          <div className="order-content">
            <div className="order-items-section">
              {cartItems.map((item) => (
                <OrderItemComponent
                  key={item.id}
                  item={item}
                  onQuantityChange={updateQuantity}
                  onInstructionsChange={updateInstructions}
                  onDelete={removeFromCart}
                />
              ))}
            </div>

            <div className="order-summary-section">
              <OrderSummary
                subtotal={calculateSubtotal()}
                tax={calculateTax()}
                total={calculateTotal()}
                tableNumber={tableNumber}
                onTableNumberChange={setTableNumber}
                overallInstructions={overallInstructions}
                onOverallInstructionsChange={setOverallInstructions}
                onPay={initiatePayment}
                isProcessing={isProcessing}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ===================== CHILD COMPONENTS ===================== */

const OrderItemComponent = ({ item, onQuantityChange, onInstructionsChange, onDelete }) => (
  <div className="order-item-card">
    <div className="order-item-main">
      <img src={item.image} alt={item.name} className="order-item-image" />

      <div className="order-item-details">
        <h3 className="order-item-name">{item.name}</h3>
        <p className="order-item-description">{item.description}</p>

        <div className="order-item-controls">
          <QuantitySelector
            quantity={item.quantity}
            onDecrease={() => onQuantityChange(item.id, item.quantity - 1)}
            onIncrease={() => onQuantityChange(item.id, item.quantity + 1)}
          />
          <span className="order-item-price">₹{(item.price * item.quantity).toFixed(2)}</span>
        </div>

        <InstructionsBox
          value={item.instructions || ""}
          onChange={(e) => onInstructionsChange(item.id, e.target.value)}
        />
      </div>

      <button className="delete-button" onClick={() => onDelete(item.id)}><MdDeleteOutline style={{fontSize:'2rem'}} /></button>
    </div>
  </div>
);

const QuantitySelector = ({ quantity, onDecrease, onIncrease }) => (
  <div className="quantity-selector">
    <button className="quantity-button" onClick={onDecrease}>−</button>
    <span className="quantity-value">{quantity}</span>
    <button className="quantity-button" onClick={onIncrease}>+</button>
  </div>
);

const InstructionsBox = ({ value, onChange }) => (
  <textarea
    className="instructions-input"
    value={value}
    onChange={onChange}
    placeholder="Special instructions..."
    rows={2}
  />
);

const OrderSummary = ({
  subtotal,
  tax,
  total,
  tableNumber,
  onTableNumberChange,
  overallInstructions,
  onOverallInstructionsChange,
  onPay,
  isProcessing,
}) => (
  <div className="order-summary-card">
    <h2 className="order-summary-title">Order Summary</h2>

    <div className="order-summary-row">
      <span>Subtotal</span> <span>₹{subtotal.toFixed(2)}</span>
    </div>

    <div className="order-summary-row">
      <span>Tax (10%)</span> <span>₹{tax.toFixed(2)}</span>
    </div>

    <div className="order-summary-row total-row">
      <span>Total</span> <span>₹{total.toFixed(2)}</span>
    </div>

    <label className="table-label">Table Number</label>
    <select
      className="table-select"
      value={tableNumber}
      onChange={(e) => onTableNumberChange(e.target.value)}
    >
      {[1, 2, 3, 4, 5, 6].map((t) => (
        <option key={t} value={`Table ${t}`}>Table {t}</option>
      ))}
    </select>

    <textarea
      className="overall-instructions-textarea"
      value={overallInstructions}
      onChange={(e) => onOverallInstructionsChange(e.target.value)}
      placeholder="Add overall instructions..."
      rows="3"
    />

    <button 
      className="checkout-button" 
      onClick={onPay}
      disabled={isProcessing}
    >
      {isProcessing ? "Processing..." : "Proceed to Checkout"}
    </button>
  </div>
);

export default Order;