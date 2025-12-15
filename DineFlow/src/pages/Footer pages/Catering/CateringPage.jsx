import React, { useState } from "react";
import "./CateringPage.css";

export default function CateringPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    guests: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // basic client-side validation
    if (!form.name || !form.email || !form.date || !form.guests) {
      alert("Please fill name, email, event date and guest count.");
      return;
    }
    // simulate successful submit
    setSubmitted(true);
    setForm({ name: "", email: "", date: "", guests: "", message: "" });
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <div className="catering-page">
            <section className="story-hero">
        <h1 className="story-title">Leave the Food to Us — Enjoy the Celebration</h1>
        <p className="story-subtitle">
         From intimate gatherings to grand celebrations, our catering service delivers fresh, beautifully crafted dishes that make every moment memorable.
        </p>
      </section>

    <div className="wraper-wrap">
      <main className="content-wrap">
        <section className="content-columns">
          <article className="content-main">
            <h2>Introduction</h2>
            <p>
              We provide end-to-end catering solutions powered by a modern
              restaurant automation system — from online ordering & menu
              management to on-site POS, delivery orchestration, and real-time
              kitchen tracking. Whether you need corporate lunches, weddings, or
              recurring catering for events, our platform keeps operations
              smooth.
            </p>

            <h2>Catering Services</h2>
            <p>
              Choose from curated packages, custom menus, and scalable staffing.
              Our automation connects bookings to orders, inventory, and payroll
              so you never overbook or run out of ingredients. Packages include
              self-serve buffets, plated service, live food stations, and
              delivery/pick-up options.
            </p>

            <h2>How Our Automation Helps</h2>
            <ul>
              <li>Central menu & pricing control across channels.</li>
              <li>
                Real-time inventory depletion so the kitchen knows exact stock.
              </li>
              <li>
                Automated staffing suggestions based on guest count and menu
                complexity.
              </li>
              <li>Integrated invoicing and easy partial/deposit payments.</li>
            </ul>

            <h2>Menus, Dietary Filters & Add-ons</h2>
            <p>
              Customers can filter menus by vegetarian, vegan, gluten-free, and
              allergy-safe options. Add-ons like beverage stations or dessert
              platters are added at checkout and auto-calculated into the
              production ticket for the kitchen.
            </p>

            <h2>Data Security & Retention</h2>
            <p>
              We store customer and booking data securely, retain only what's
              needed to deliver the service, and provide easy access and
              deletion on request.
            </p>
          </article>

          <aside
            className="content-aside"
            aria-labelledby="booking-form-heading"
          >
            <div className="aside-card">
              <h3 id="booking-form-heading">Book Catering</h3>
              <p className="aside-sub">
                Quick booking request — we’ll follow up.
              </p>

              <form
                className="booking-form"
                id="about-section"
                onSubmit={handleSubmit}
              >
                <label>
                  <span className="label-text">Full name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </label>

                <label>
                  <span className="label-text">Email</span>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>

                <label>
                  <span className="label-text">Event date</span>
                  <input
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    type="date"
                    required
                  />
                </label>

                <label>
                  <span className="label-text">Guests</span>
                  <input
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    type="number"
                    min="1"
                    placeholder="Number of guests"
                    required
                  />
                </label>

                <label>
                  <span className="label-text">Notes (optional)</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Any dietary needs, theme, or special requests"
                    rows="4"
                  />
                </label>

                <button type="submit" className="submit-btn">
                  Send request
                </button>

                {submitted && (
                  <p className="submit-success" role="status">
                    Request received — we'll contact you shortly.
                  </p>
                )}
              </form>
            </div>
          </aside>
        </section>

        <hr className="page-divider" />

        <section className="more-info">
          <h2>Pricing & Packages</h2>
          <p>
            Pricing depends on menu selection, service style, and guest count.
            We offer customizable per-head pricing with transparent breakdowns
            for staff, travel, equipment, and add-ons.
          </p>

          <h2>Frequently Asked</h2>
          <p>
            Yes — tasting sessions are available. Deposits are required to
            confirm dates; full terms are shared during booking.
          </p>
        </section>
      </main>
      </div>
    </div>
  );
}
