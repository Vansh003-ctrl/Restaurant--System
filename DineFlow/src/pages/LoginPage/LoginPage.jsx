// src/Login.jsx
import React, { useState } from "react";
import { useAuth } from "../../context/Auth.context";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/bgImage.png";
import "../../style/LoginPage/LoginPage.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const res = login(formData.email, formData.password);

    if (res.success) {
      navigate(res.role === "admin" ? "/" : "/");
    }
  };

  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay"></div>

      <div className="login-card">
        <h1 className="title">Welcome Back</h1>
        <p className="subtitle">Sign in to continue</p>

        <form onSubmit={handleSubmit} className="form">
          <label className="label">
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="label">
            Password
            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="show-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </label>

          <button type="submit" className="submit-btn">
            Login
          </button>

          <p className="footer-text">
            Don’t have an account? <a href="/signup">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;