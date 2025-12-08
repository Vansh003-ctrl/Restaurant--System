import "../../style/profilePage/Profile.css";
import React, { useState } from "react";
import { FiEdit, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState({
    name: "Ritesh Sharma",
    email: "ritesh@example.com",
    phone: "9736900011",
    address: "Sector 45, Gurugram, Haryana",
    joined: "March 2024",
    points: 245,
    image: null,
  });

  const [editOpen, setEditOpen] = useState(false);
  const [passOpen, setPassOpen] = useState(false);

  const recentOrders = [
    { id: 1, name: "Margherita Pizza", amount: 125, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop" },
    { id: 2, name: "Choco Lava Cake", amount: 80, image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop" },
    { id: 3, name: "Fresh Orange Juice", amount: 60, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop" },
  ];

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setUser({ ...user, image: imgURL });
    }
  };

  return (
    <div className="profile-page-redesign">

      {/* Profile Banner */}
      <div className="profile-banner">
        <div className="profile-pic-wrapper">
          <img
            src={user.image || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
            alt="profile"
            className="profile-pic"
          />
          <label className="edit-pic-btn">
            <FiEdit />
            <input type="file" onChange={handleImage} hidden />
          </label>
        </div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <span className="loyalty-badge">Gold Member</span>
      </div>

      {/* Quick Stats */}
      <div className="stats-cards">
        <div className="stat-card">
          <h3>Orders</h3>
          <p>32</p>
        </div>
        <div className="stat-card">
          <h3>Favorites</h3>
          <p>12</p>
        </div>
        <div className="stat-card">
          <h3>Reward Points</h3>
          <p>{user.points}</p>
        </div>
      </div>

      {/* Personal Info */}
      <div className="personal-info-card">
        <h3>Personal Information</h3>
        <div className="info-row"><strong>Phone:</strong> {user.phone}</div>
        <div className="info-row"><strong>Address:</strong> {user.address}</div>
        <div className="info-row"><strong>Joined:</strong> {user.joined}</div>
        <button className="btn-edit-profile" onClick={() => setEditOpen(true)}>Edit Profile</button>
      </div>

      {/* Recent Orders */}
      <div className="recent-orders">
        <h3>Recent Orders</h3>
        <div className="orders-scroll">
          {recentOrders.map(order => (
            <div key={order.id} className="order-card">
              <img src={order.image} alt={order.name} />
              <p>{order.name}</p>
              <p>₹{order.amount.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <Link to="/orders" className="action-btn">View Orders</Link>
        <button className="action-btn" onClick={() => setPassOpen(true)}>Change Password</button>
        <button className="logout-btn" onClick={() => alert("Logged Out!")}>Logout</button>
      </div>

      {/* EDIT PROFILE MODAL */}
      {editOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Edit Profile</h2>
            <input type="text" defaultValue={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })}/>
            <input type="email" defaultValue={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}/>
            <input type="text" defaultValue={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })}/>
            <input type="text" defaultValue={user.address} onChange={(e) => setUser({ ...user, address: e.target.value })}/>
            <div className="modal-buttons">
              <button className="btn-save" onClick={() => setEditOpen(false)}>Save</button>
              <button className="btn-cancel" onClick={() => setEditOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* CHANGE PASSWORD MODAL */}
      {passOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Change Password</h2>
            <input type="password" placeholder="Current Password"/>
            <input type="password" placeholder="New Password"/>
            <input type="password" placeholder="Confirm Password"/>
            <div className="modal-buttons">
              <button className="btn-save" onClick={() => setPassOpen(false)}>Change Password</button>
              <button className="btn-cancel" onClick={() => setPassOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}