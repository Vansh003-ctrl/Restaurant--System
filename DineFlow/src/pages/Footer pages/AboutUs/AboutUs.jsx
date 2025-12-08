import React from "react";
import "./AboutUs.css";
import { ArrowRight, Rocket, ChartCandlestick, CalendarCheck, Handshake } from "lucide-react";

const About = () => {
    const team = [
  {
    name: "Aarav Khanna",
    role: "Head Chef",
    img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Priya Sharma",
    role: "Sous Chef",
    img: "https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Rohan Gupta",
    role: "Restaurant Manager",
    img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    name: "Simran Kaur",
    role: "Customer Experience Lead",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D",
  },
];
const cards = [
  {
    title: "Our Purpose",
    text: "To empower restaurants with intelligent automation that enhances efficiency, customer experience, and profitability.",
    icon: <CalendarCheck strokeWidth={1.75} />,
  },
  {
    title: "Our Values",
    text: "We believe in innovation, transparency, trust, and delivering solutions that truly help businesses grow.",
    icon: <ChartCandlestick strokeWidth={1.75} />,
  },
  {
    title: "Our Vision",
    text: "To become the global leader in restaurant automation by simplifying operations through AI-driven technology.",
    icon: <Rocket />,
  },
  {
    title: "Our Commitment",
    text: "We are committed to continuous improvement, 24/7 support, and building long-term relationships with our clients.",
    icon: <Handshake strokeWidth={1.75} />,
  },
];

  return (
    <div className="about-page">

      {/* HERO */}
      <header className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow">About</p>
          <h1 className="hero-title">Graphura</h1>
          <p className="hero-sub">Restaurant Automation System</p>

          <p className="hero-desc">
            Empowering restaurants with cutting-edge automation solutions that
            streamline operations, enhance customer experience, and maximize
            profit — powered by AI-driven intelligence.
          </p>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">10+</div>
              <div className="stat-label">Restaurants Automated</div>
            </div>
            <div className="stat">
              <div className="stat-value">2+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat">
              <div className="stat-value">40+</div>
              <div className="stat-label">Team Members</div>
            </div>
          </div>

          <div className="hero-cta">
            <button className="btn primary">Meet Our Team</button>
            <button className="btn outline">Get in Touch</button>
          </div>
        </div>
      </header>

      {/* MISSION */}
      <section className="mission">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <p className="lead">
            At Graphura, we blend culinary craft with modern technology — building
            intelligent tools that let restaurants focus on food while we handle the flow.
          </p>

          <div className="cards">
            <div className="card">
              <h3>Focus on Results</h3>
              <p>We measure success by the tangible improvements we deliver.</p>
            </div>
            <div className="card">
              <h3>Continuous Innovation</h3>
              <p>We stay ahead of trends to provide cutting-edge automation.</p>
            </div>
            <div className="card">
              <h3>Client Partnership</h3>
              <p>We treat every client relationship as a long-term partnership.</p>
            </div>
            <div className="card">
              <h3>Data-Driven</h3>
              <p>All our strategies are backed by real data and analytics.</p>
            </div>
          </div>
        </div>
      </section>

        {/* purpouse section */}

          <section className="purpose-section">
      <h2 className="purpose-heading">What Drives Us</h2>
      <p className="purpose-subtext">
        The principles that shape our work and define our mission.
      </p>

      <div className="purpose-grid">
        {cards.map((item, index) => (
          <div className="purpose-card" key={index}>
            <div className="purpose-icon">{item.icon}</div>
            <h3 className="purpose-title">{item.title}</h3>
            <p className="purpose-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>

      {/* meet our team */}
      <section className="team-section">
      <h2 className="team-heading">Meet Our Team</h2>
      <p className="team-subtext">
        The people who work together to give you the best dining experience.
      </p>

      <div className="team-grid">
        {team.map((member, idx) => (
          <div className="team-card" key={idx}>
            <div className="team-img-wrapper">
              <img src={member.img} alt={member.name} className="team-img" />
            </div>

            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>

            <div className="team-line"></div>
          </div>
        ))}
      </div>
    </section>

      {/* CTA */}
            <section className="cta-section">
      <div className="cta-wrapper">
        <h2 className="cta-title">Ready to Work With Us?</h2>
        <p className="cta-text">
          Discover how Graphura can automate your restaurant and help you scale 
          with intelligent, AI-powered operations.
        </p>

        <button className="cta-button">
          Get In Touch <ArrowRight size={18} />
        </button>
      </div>
    </section>

    </div>
  );
};

export default About;