import React, { useState } from "react";
import { useAuth } from "../../context/Auth.context";
import { useNavigate } from "react-router-dom";

import bgImage from "../../assets/bgImage.png";
import "../../style/SignUpPage/SignUp.css";

const SignUp = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "", general: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Enter a valid email.";
    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
    if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm your password.";
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    signup(formData.email, formData.password);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/");
    }, 500);
  };

  return (
    <div className="signup-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="signup-overlay" />
      <div className="signup-container">
        <div className="signup-card">
          <h1 className="signup-title">Create an Account</h1>
          <p className="signup-subtitle">Sign up quickly and start your journey.</p>

          {errors.general && <div className="signup-error">{errors.general}</div>}

          <form className="signup-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className={`form-input ${errors.fullName ? "input-error" : ""}`}
              />
              {errors.fullName && <p className="error-text">{errors.fullName}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? "input-error" : ""}`}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`form-input ${errors.password ? "input-error" : ""}`}
                />
                <button
                  type="button"
                  className="toggle-password-btn"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && <p className="error-text">{errors.password}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`form-input ${errors.confirmPassword ? "input-error" : ""}`}
              />
              {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
            </div>

            <button type="submit" className="signup-btn" disabled={isSubmitting}>
              {isSubmitting ? "Creating account..." : "Sign Up"}
            </button>

            <p className="signup-footer">
              Already have an account? <a href="/login">Log in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;