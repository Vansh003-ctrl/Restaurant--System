import React from "react";
import "./WhyChooseUs.css";
import { ShieldCheck, TrendingUp, Users, Sparkles, ArrowRightCircle, Clock, CheckCircle, BarChart3 } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck size={40} />,
      title: "Highly Reliable System",
      desc: "Graphura ensures 99.9% uptime so your restaurant never faces interruptions.",
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Boosts Efficiency",
      desc: "Automated workflows reduce wait times and improve operational accuracy.",
    },
    {
      icon: <Users size={40} />,
      title: "Customer-Centered",
      desc: "Enhance customer experiences with seamless order and table management.",
    },
    {
      icon: <Sparkles size={40} />,
      title: "AI-Powered Insights",
      desc: "Intelligent analytics help you grow faster with data-backed decisions.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Setup Your Restaurant",
      desc: "Add your menu, staff, tables, and start using Graphura instantly.",
      icon: <CheckCircle size={34} />,
    },
    {
      num: "02",
      title: "Automate Operations",
      desc: "Orders, reservations, tracking—all synced across devices automatically.",
      icon: <Clock size={34} />,
    },
    {
      num: "03",
      title: "Track Performance",
      desc: "Get detailed reports on sales, tables, customers, and efficiency.",
      icon: <BarChart3 size={34} />,
    },
    {
      num: "04",
      title: "Grow Faster",
      desc: "Scale your restaurant with tools built for growth and performance.",
      icon: <ArrowRightCircle size={34} />,
    },
  ];

  return (
    <div className="why-wrapper">

      {/* -------- WHY CHOOSE US SECTION -------- */}
      <section className="why-section">
        <div className="why-container">
          <h2 className="why-title">Why Choose Graphura?</h2>
          <p className="why-subtitle">
            A complete automation ecosystem designed to simplify your restaurant operations.
          </p>

          <div className="why-grid">
            {features.map((item, index) => (
              <div className="why-card" key={index}>
                <div className="why-icon">{item.icon}</div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------- HOW GRAPHURA WORKS -------- */}
      <section className="how-section">
        <div className="how-container">
          <h2 className="how-title">How Graphura Works</h2>
          <p className="how-subtitle">A simple 4-step flow to transform your restaurant.</p>

          <div className="how-grid">
            {steps.map((step, i) => (
              <div className="how-card" key={i}>
                <div className="how-step-number">{step.num}</div>
                <div className="how-step-icon">{step.icon}</div>
                <h3 className="how-step-title">{step.title}</h3>
                <p className="how-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------- STATS / ACHIEVEMENTS -------- */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-box">
            <h3>10+</h3>
            <p>Restaurants Automated</p>
          </div>
          <div className="stat-box">
            <h3>2+ Years</h3>
            <p>Industry Experience</p>
          </div>
          <div className="stat-box">
            <h3>40+ Experts</h3>
            <p>Dedicated Team Members</p>
          </div>
          <div className="stat-box">
            <h3>1,000+</h3>
            <p>Orders Processed Daily</p>
          </div>
        </div>
      </section>

      {/* -------- TESTIMONIALS -------- */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="testi-title">What Restaurants Say</h2>

          <div className="testi-grid">
            <div className="testi-card">
              <p>“Graphura has completely transformed the speed and accuracy of our restaurant operations.”</p>
              <span>- Urban Bites Café</span>
            </div>

            <div className="testi-card">
              <p>“The automation features are incredible. Our customer wait time reduced drastically!”</p>
              <span>- The Spice Villa</span>
            </div>

            <div className="testi-card">
              <p>“We saw a clear 30% improvement in customer satisfaction within the first month.”</p>
              <span>- The Food Square</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WhyChooseUs;