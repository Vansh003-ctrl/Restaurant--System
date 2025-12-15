import React, { useState } from "react";
import { Eye } from "lucide-react";
import {
  Box,
  HandCoins,
  ChartNoAxesCombined,
  Users,
  PencilLine,
  Trash2,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../../style/adminPage/admin.css";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("menu");
  const [searchQuery, setSearchQuery] = useState("");

  const menuItems = [
    { id: 1, name: "Classic Cheeseburger", category: "Main Course", image: "🍔", price: 12.99 },
    { id: 2, name: "Margarita Pizza", category: "Main Course", image: "🍕", price: 14.99 },
    { id: 3, name: "Caesar Salad", category: "Salad", image: "🥗", price: 8.99 },
  ];

  const categories = [
    { id: 1, name: "Main Course", itemCount: 3 },
    { id: 2, name: "Salad", itemCount: 1 },
    { id: 3, name: "Dessert", itemCount: 0 },
  ];

  const ordersData = [
    { name: "Mon", orders: 20 },
    { name: "Tue", orders: 45 },
    { name: "Wed", orders: 30 },
    { name: "Thu", orders: 60 },
    { name: "Fri", orders: 40 },
    { name: "Sat", orders: 55 },
    { name: "Sun", orders: 35 },
  ];

  const revenueData = [
    { name: "Jan", revenue: 200 },
    { name: "Feb", revenue: 280 },
    { name: "Mar", revenue: 350 },
    { name: "Apr", revenue: 300 },
  ];

  const recentOrders = [
  {
    id: "ORD001",
    customer: "Alice Smith",
    items: "1x Burger, 1x Fries",
    total: "$18.50",
    status: "completed",
  },
  {
    id: "ORD002",
    customer: "Bob Johnson",
    items: "2x Pizza, 1x Coke",
    total: "$35.00",
    status: "pending",
  },
  {
    id: "ORD003",
    customer: "Charlie Brown",
    items: "1x Salad, 1x Water",
    total: "$12.00",
    status: "cooking",
  },
  {
    id: "ORD004",
    customer: "Diana Prince",
    items: "1x Lava Cake, 1x Coffee",
    total: "$11.50",
    status: "completed",
  },
  {
    id: "ORD005",
    customer: "Eve Adams",
    items: "3x Burger, 2x Shakes",
    total: "$42.75",
    status: "cancelled",
  },
];

  return (
    <section className="admin">
      <header className="admin-header">
        <h1>Dashboard</h1>
        <p>Overview of your restaurant performance</p>
      </header>

      {/* Stats */}
      <div className="stats">
        <Stat icon={<Box />} label="Total Orders" value="1,245" />
        <Stat icon={<HandCoins />} label="Revenue" value="₹45,678" />
        <Stat icon={<ChartNoAxesCombined />} label="Avg Order" value="₹369" />
        <Stat icon={<Users />} label="Customers" value="189" />
      </div>

      <div className="dashboard-grid">
      <section className="menu-management card-menu">
            <Card title="Menu Management"  full>
              <div className="menu-pagee">
              <div className="menu-controls">
                <div className="tabs">
                  <button className={activeTab === "menu" ? "active" : ""} onClick={() => setActiveTab("menu")}>
                    Menu Items
                  </button>
                  <button className={activeTab === "categories" ? "active" : ""} onClick={() => setActiveTab("categories")}>
                    Categories
                  </button>
                </div>

                <input
                  className="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="list">
                {(activeTab === "menu" ? menuItems : categories).map((item) => (
                  <div className="list-row" key={item.id}>
                    <div className="list-left">
                      <span className="emoji">{item.image || "📁"}</span>
                      <div>
                        <h4>{item.name}</h4>
                        <span>{item.category || `${item.itemCount} items`}</span>
                      </div>
                    </div>
                    <div className="actions">
                      <PencilLine />
                      <Trash2 />
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </Card>
      </section>
      {/* Charts */}

      
        <section className="orders-chart card">
        <Card title="Orders Trend">
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={ordersData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line dataKey="orders" stroke="#6366f1" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
        </section>

      <section className="revenue-chart card">
        <Card title="Revenue">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" radius={[6, 6, 0, 0]} fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
        </section>
</div>
                <section className="card recent-orders">
      <div className="orders-header">
        <h3>Recent Orders</h3>
        <p>Latest customer orders for quick review</p>
      </div>

      <div className="orders-table-wrapper">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id}>
                <td className="order-id">{order.id}</td>
                <td>{order.customer}</td>
                <td className="items">{order.items}</td>
                <td className="total">{order.total}</td>
                <td>
                  <span className={`status ${order.status}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <button className="view-btn">
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
      
    </section>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div className="stat">
      <div className="icon">{icon}</div>
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

function Card({ title, children, full }) {
  return (
    <div className={`card ${full ? "full" : ""}`}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}