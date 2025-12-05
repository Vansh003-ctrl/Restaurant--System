import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../style/ordersPage/Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/orders/all-orders");
      setOrders(res.data.orders);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <p className="orders-loading">Loading orders...</p>;

  return (
    <div className="orders-container">
      <h2 className="orders-title">All Orders</h2>

      {orders.length === 0 && <p className="orders-empty">No orders found.</p>}

      <div className="orders-list">
        {orders.map((order) => (
          <div className="order-card compact" key={order._id}>
            {/* Header */}
            <div className="order-header-row">
              <h3 className="order-id">#{order.orderId}</h3>
              <span className={`order-status-badge ${order.status.toLowerCase()}`}>
                {order.status}
              </span>
            </div>

            {/* Basic details */}
            <div className="order-basic">
              <p><strong>Table:</strong> {order.tableNumber}</p>
              <p><strong>Items:</strong> {order.itemCount}</p>
              <p className="order-total-amount">₹{order.total}</p>
            </div>

            {/* Instructions only if exists */}
            {order.instructions && order.instructions.trim() !== "" && (
              <p className="order-note">
                <strong>Note:</strong> {order.instructions}
              </p>
            )}

            <p className="order-time">
              {new Date(order.createdAt).toLocaleString()}
            </p>

            {/* Items */}
            <div className="order-items">
              <ul>
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    {item.name} — <b>×{item.qty}</b> <span>₹{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;