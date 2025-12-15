import React from "react";
import "../../style/contactAndFeedBack/contact.css";

export default function ContactPage() {
  return (
    <section className="contact-page">
      {/* HEADER */}
      <header className="contact-header">
        <h1>Contact & Feedback</h1>
        <p>
          We value your thoughts and inquiries. Reach out to us for feedback,
          questions, or reservations.
        </p>
      </header>

      {/* CONTENT */}
      <div className="contact-wrapper">
        {/* FORM */}
        <div className="contact-card">
          <h2>Send Us Your Feedback</h2>

          <form className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="John Doe" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="john.doe@example.com" />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Regarding my recent visit..." />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Share your experience or ask a question..." />
            </div>

            <button type="submit" className="submit-btn">
              Submit Feedback
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-column">
          {/* MAP */}
          <div className="contact-card">
            <h2>Our Location</h2>
            <div className="map-box">
              <iframe
                title="google-map"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.057241886712!2d76.7756389!3d28.3255257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d41000fe8670d%3A0x7b0a08f0043a22af!2sGraphura%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1733323750000!5m2!1sen!2sin"
              />
            </div>

            <p className="address">
              Graphura India Private Limited, near RSF, Pataudi, Gurgaon, Haryana
              122503
            </p>
          </div>

          {/* CONTACT DETAILS */}
          <div className="contact-card">
            <h2>Get in Touch</h2>
            <p>📞 +91-7378021327</p>
            <p>📧 info@graphura.in</p>
            <p>
              📍 Graphura India Private Limited, near RSF, Pataudi, Gurgaon,
              Haryana 122503
            </p>

            <div className="social-icons">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}