import React from "react";
import "./TableBooking.css";

const TableBooking = () => {
    return (
        <div className="booking-container">

            {/* Header Section */}
            <header className="booking-header">
                <h1 className="booking-title">Table Booking</h1>
                <p className="booking-subtitle">
                    Reserve your dining experience powered by our Restaurant Automation System
                </p>
                <p className="booking-date">Updated on 4 November 2025</p>
            </header>

            {/* Content Section */}
            <section className="booking-content">

                <h2 className="section-title">Why Online Table Booking?</h2>
                <p className="section-text">
                    Our smart restaurant automation system allows customers to reserve tables effortlessly
                    and helps restaurants manage seating, reduce wait times, and improve dining efficiency.
                </p>

                <h2 className="section-title">Book Your Table</h2>
                <form className="booking-form">

                    <label className="booking-label">Full Name</label>
                    <input type="text" className="booking-input" placeholder="Enter your name" />

                    <label className="booking-label">Phone Number</label>
                    <input type="text" className="booking-input" placeholder="Enter your phone number" />

                    <label className="booking-label">Number of Guests</label>
                    <input type="number" className="booking-input" min="1" max="20" />

                    <label className="booking-label">Booking Date</label>
                    <input type="date" className="booking-input" />

                    <label className="booking-label">Preferred Time</label>
                    <input type="time" className="booking-input" />

                    <button type="submit" className="booking-btn">Confirm Booking</button>

                </form>

                <h2 className="section-title">How Automation Helps</h2>
                <p className="section-text">
                    • Real-time table availability<br />
                    • Automatic confirmation via SMS<br />
                    • Intelligent seating optimization<br />
                    • Queue and wait-time prediction<br />
                    • Staff notification alerts
                </p>

            </section>
        </div>
    );
};

export default TableBooking;
