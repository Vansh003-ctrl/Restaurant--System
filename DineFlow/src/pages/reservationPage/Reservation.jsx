import React, { useState } from "react";
import "../../style/reservationPage/Reservation.css";
import { FaChair, FaClock, FaCalendarAlt } from "react-icons/fa";

const Reservation = () => {
  const [selectedTable, setSelectedTable] = useState(null);

  const tables = [
    { id: 1, name: "T1", seats: 2, status: "available" },
    { id: 2, name: "T2", seats: 4, status: "booked" },
    { id: 3, name: "T3", seats: 6, status: "reserved" },
    { id: 4, name: "T4", seats: 4, status: "available" },
    { id: 5, name: "T5", seats: 8, status: "booked" },
  ];

  return (
    <div className="res-container">

      {/* HEADER */}
      <div className="res-header">
        <h1>Reservations</h1>
        <p>Book your table in advance for a seamless dining experience.</p>
      </div>

      <div className="res-content">

        {/* TABLE GRID */}
        <div className="table-section">
          <h2 className="section-title">Available Tables</h2>

          <div className="res-table-grid">
            {tables.map((t) => (
              <div
                key={t.id}
                onClick={() => t.status === "available" && setSelectedTable(t)}
                className={`res-table-card ${t.status} ${
                  selectedTable?.id === t.id ? "active" : ""
                }`}
              >
                <div className="table-icon">
                  <FaChair />
                </div>

                <div className="table-info">
                  <h4>{t.name}</h4>
                  <p>{t.seats} Seats</p>
                </div>

                <span className={`status ${t.status}`}>{t.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BOOKING PANEL */}
        {selectedTable && (
          <div className="booking-panel">

            <div className="panel-header">
              <h3>Table {selectedTable.name}</h3>
              <p>{selectedTable.seats} Seats</p>
            </div>

            <label>Date</label>
            <div className="input-box">
              <FaCalendarAlt /> <input type="date" />
            </div>

            <label>Time Slot</label>
            <div className="input-box">
              <FaClock />
              <select>
                <option>12:00 PM</option>
                <option>12:30 PM</option>
                <option>01:00 PM</option>
                <option disabled>02:00 PM (Booked)</option>
              </select>
            </div>

            <label>Guests</label>
            <input type="number" min="1" max="20" className="plain-input" />

            <label>Special Notes</label>
            <textarea placeholder="Birthday, window seat, extra plates..." />

            <button className="reserve-btn">Confirm Reservation</button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Reservation;