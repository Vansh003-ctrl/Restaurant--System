import React, { useRef, useState } from "react";
import "./ProfilePage.css";

export default function ProfilePage() {
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    fullName: "Ramu Kaka",
    email: "kaka.ramu@example.com",
    phone: "+91 9080706050",
    about: "I visit weekly to maintain my toxic relationship with good food also to flirt with calories I can never escape.",
    password: "",
    repeatPassword: "",
  });

  const [avatarUrl, setAvatarUrl] = useState(
    "https://images.unsplash.com/photo-1723648722809-65f1e11e5060?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwZ3V5JTIwZm9vZGllfGVufDB8fDB8fHww"
  );

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ---------------- VALIDATION ----------------
  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (form.password && form.password.length < 6)
      e.password = "Password must be at least 6 characters.";
    if (form.password !== form.repeatPassword)
      e.repeatPassword = "Passwords do not match.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((p) => ({ ...p, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 800)); // mock API
    alert("Profile updated ✔️");
    setForm((p) => ({ ...p, password: "", repeatPassword: "" }));
    setLoading(false);
  };

  // ---------------- AVATAR UPLOAD ----------------
  const chooseFile = () => fileInputRef.current?.click();

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Image must be < 5MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setAvatarUrl(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="profile-shell">
      <div className="profile-card">

        {/* ---------- SIDEBAR ---------- */}
        <aside className="profile-side">
          <div className="pro-avatar-wrap">
            <img src={avatarUrl} alt="" className="pro-avatar" />
            <button onClick={chooseFile} className="pro-upload">Change</button>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleFile}
            />
          </div>

          <div className="pro-side-info">
            <p className="pro-name">{form.fullName}</p>
            <p className="pro-email">{form.email}</p>
          </div>

          <div className="pro-nav">
            <button className="pro-nav-item">My Table Bookings</button>
            <button className="pro-nav-item">My Orders</button>
            <button className="pro-nav-item">My Cart</button>
          </div>
        </aside>

        {/* ---------- MAIN FORM ---------- */}
        <main className="profile-main">
          <form onSubmit={handleSubmit} className="pro-form">
            <h2 className="pro-title">Profile Details</h2>

            {/* Full name */}
            <label className="pro-label">Full name *</label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className={`pro-input ${errors.fullName ? "error" : ""}`}
            />
            {errors.fullName && <p className="pro-err">{errors.fullName}</p>}

            {/* Email */}
            <label className="pro-label">Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`pro-input ${errors.email ? "error" : ""}`}
            />
            {errors.email && <p className="pro-err">{errors.email}</p>}

            {/* Phone */}
            <label className="pro-label">Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="pro-input"
            />

            {/* About */}
            <label className="pro-label">About</label>
            <textarea
              name="about"
              rows={3}
              value={form.about}
              onChange={handleChange}
              className="pro-textarea"
            />

            <hr className="pro-divider" />

            <p className="pro-small">Change password (optional)</p>

            {/* Password */}
            <label className="pro-label">New password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className={`pro-input ${errors.password ? "error" : ""}`}
            />
            {errors.password && <p className="pro-err">{errors.password}</p>}

            {/* Repeat */}
            <label className="pro-label">Repeat password</label>
            <input
              type="password"
              name="repeatPassword"
              value={form.repeatPassword}
              onChange={handleChange}
              className={`pro-input ${errors.repeatPassword ? "error" : ""}`}
            />
            {errors.repeatPassword && (
              <p className="pro-err">{errors.repeatPassword}</p>
            )}

            <div className="pro-actions">
              <button className="pro-btn" disabled={loading}>
                {loading ? "Saving..." : "Save changes"}
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}