import React from "react";
import "./OurStory.css";
import img from "../../../assets/AboutUs.png"
const OurStory = () => {
  return (
    <div className="story-wrapper">

      {/* ---------------- HERO ---------------- */}
      <section className="story-hero">
        <div className="story-hero-overlay"></div>

        <div className="story-hero-content container">
          <h1>Our Story</h1>
          <p>
            At Graphura, every plate is part of a journey—one shaped by flavors, passion, and the timeless art of fine dining. We believe that food is more than a meal; it is an experience crafted with intention, creativity, and heart. From the freshness of our ingredients to the care behind every recipe, each dish reflects our commitment to excellence. Whether you visit us for a comforting classic or an adventurous new flavor, our goal is to make every moment memorable. Welcome to Graphura, where taste, artistry, and hospitality come together to create a truly exceptional dining experience.
          </p>
        </div>
      </section>

      {/* ---------------- INTRO ---------------- */}
      <section className="story-intro container">
        <div className="story-intro-left">
          <h2>The Heart Behind Graphura</h2>
          <p>
            Graphura began with a timeless vision — to offer an experience
            that blends soulful dining with warm hospitality, where each dish
            is a craft, not just a meal.
          </p>
          <p>
            Our roots are grounded in tradition, while our spirit embraces
            creativity. Every plate we serve carries a story — of farmers,
            flavors, and the passion that fuels our kitchen.
          </p>
        </div>

        <div className="story-intro-right">
          <img src={img} alt="Restaurant interior" />
        </div>
      </section>

      {/* ---------------- TIMELINE ---------------- */}
      <section className="story-timeline-section">
        <h2 className="section-heading">The Journey</h2>

        <div className="story-timeline container">
          {[
            {
              year: "2021",
              title: "Where It Began",
              text: "A dream to create a modern dining space built on flavor and hospitality."
            },
            {
              year: "2022",
              title: "Graphura Opens",
              text: "Our first restaurant welcomed guests with warmth and authentic cooking."
            },
            {
              year: "2023",
              title: "A Culinary Landmark",
              text: "Graphura became one of the most loved dining destinations in the city."
            },
            {
              year: "2024",
              title: "A New Chapter",
              text: "We reimagined Graphura with immersive dining experiences."
            },
          ].map((item, i) => (
            <div key={i} className="timeline-card">
              <div className="timeline-year">{item.year}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- BELIEFS ---------------- */}
      <section className="story-beliefs-section container">
        <h2 className="section-heading">What We Believe</h2>

        <div className="beliefs-grid">
          {[
            {
              title: "Crafted With Passion",
              text: "Every dish is prepared with dedication and genuine love for food."
            },
            {
              title: "Fresh & Finest Ingredients",
              text: "We remain committed to sourcing only the finest produce daily."
            },
            {
              title: "Exceptional Hospitality",
              text: "Guests at Graphura are welcomed like family, always."
            },
            {
              title: "Memorable Experiences",
              text: "We create moments that stay with you long after the meal is over."
            },
          ].map((item, i) => (
            <div key={i} className="belief-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default OurStory;