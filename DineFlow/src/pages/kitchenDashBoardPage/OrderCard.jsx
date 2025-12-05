import React from "react";

export default function OrderCard({ status, order, onAction }) {
  return (
    <div className={`order-card order-card-${status}`}>
      <div className="order-card-top">
        <h3 className="order-id">Order {order.id}</h3>
        <span className="table-pill">Table {order.table}</span>
      </div>

      <ul className="order-items">
        {order.items.map((item, idx) => (
          <li key={idx}>
            <span className="item-name">• {item.name}</span>
            <span className="item-qty">x{item.qty}</span>
          </li>
        ))}
      </ul>

      <p className="order-time">{order.time}</p>

      {onAction && (
        <button
          className={`order-action-btn btn-${status}`}
          onClick={onAction}
        >
          {status === "pending" && "Start Cooking"}
          {status === "inProgress" && "Mark Ready"}
          {status === "ready" && "Mark Served"}
        </button>
      )}
    </div>
  );
}