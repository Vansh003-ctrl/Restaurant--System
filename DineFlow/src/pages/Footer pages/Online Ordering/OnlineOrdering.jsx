// OnlineOrdering.jsx
import React, { useState } from "react";
import "./OnlineOrdering.css";

const OnlineOrdering = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add actual API call to save data
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="online-ordering-page">
      <HeroSection />
      <InfoSection />
      <ContactForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        submitted={submitted}
      />
      <ExternalLinks />
    </div>
  );
};

export default OnlineOrdering;

/* =================== Hero Section =================== */
const HeroSection = () => (
  <section className="hero-section">
    <h1>Online Ordering Coming Soon!</h1>
    <p>
      We are excited to serve you fresh meals soon via online ordering. Meanwhile, you can reach out to us directly or order via our trusted partners.
    </p>
  </section>
);

/* =================== Info Section =================== */
const InfoSection = () => (
  <section className="info-section">
    <h2>How to Place Your Order</h2>
    <p>
      Fill out the contact form below with your details and order preferences, and our team will get back to you promptly.
    </p>
    <p>
      Alternatively, you can order through our restaurant listing on Swiggy or Zomato for instant delivery.
    </p>
  </section>
);

/* =================== Contact Form =================== */
const ContactForm = ({ formData, handleChange, handleSubmit, submitted }) => (
  <section className="contact-form-section">
    <h2>Send Us Your Details</h2>
    {submitted && <p className="success-msg">Thank you! We have received your request and will contact you soon.</p>}
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Your Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message / Order Details"
        value={formData.message}
        onChange={handleChange}
        rows="4"
      />
      <button type="submit">Send Request</button>
    </form>
  </section>
);

/* =================== External Links =================== */
const ExternalLinks = () => (
  <section className="external-links-section">
    <h2>Order from Our Partners</h2>
    <div className="links-container">
      <a href="https://www.swiggy.com/restaurants/your-restaurant" target="_blank" rel="noreferrer" className="partner-link">
        Order on Swiggy
      </a>
      <a href="https://www.zomato.com/your-restaurant" target="_blank" rel="noreferrer" className="partner-link">
        Order on Zomato
      </a>
    </div>
  </section>
);