import React from "react";
import "../../style/contactAndFeedBack/contact.css";

export default function ContactPage() {
    return (
        <div className="contact-container">
            <div className="heade-contact">

            <h1 className="page-title-heading">Contact & Feedback</h1>
            <p className="page-subtitle">
                We value your thoughts and inquiries. Reach out to us for feedback, questions, or reservations.
            </p>
            </div>

            <div className="contact-grid">

                {/* LEFT: Feedback Form */}
                <div className="card form-card" >
                    <h2 id="form-heading">Send Us Your Feedback</h2>

                    <form>
                        <label>Name</label>
                        <input type="text" placeholder="John Doe" />

                        <label>Email</label>
                        <input type="email" placeholder="john.doe@example.com" />

                        <label>Subject</label>
                        <input type="text" placeholder="Regarding my recent visit..." />

                        <label>Message</label>
                        <textarea placeholder="Share your experience or ask a question..."></textarea>

                        <button type="submit" className="submit-btn">Submit Feedback</button>
                    </form>
                </div>

                {/* RIGHT: Map + Contact Info */}
                <div className="right-side">

                    <div className="card map-card">
                        <h2 id="form-heading">Our Location</h2>

                        {/* Real Google Map Embed */}
                        <iframe
                            title="google-map"
                            className="map-embed"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.057241886712!2d76.7756389!3d28.3255257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d41000fe8670d%3A0x7b0a08f0043a22af!2sGraphura%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1733323750000!5m2!1sen!2sin"
                        ></iframe>

                        <p className="address">Graphura India Private Limited, near RSF, Pataudi, Gurgaon, Haryana 122503</p>
                    </div>


                    {/* CONTACT DETAILS */}
                    <div className="contact-card details-card">
                        <h2 className="card-heading" id="form-heading">Get in Touch</h2>

                        <p className="info-line">📞 +91-7378021327</p>
                        <p className="info-line">📧 info@graphura.in</p>
                        <p className="info-line">📍 Graphura India Private Limited, near RSF, Pataudi, Gurgaon, Haryana 122503</p>

                        <div className="social-icons">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
