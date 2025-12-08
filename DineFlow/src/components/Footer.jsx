import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

import { Link } from "react-router-dom";
import "../style/Footer.css";
import logo from "../assets/Graphura logo Black.png";

export default function Footer() {
  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Why Choose Us", href: "/whychooseus" },
    { name: "Our Story", href: "/our-story" },
  ];

  const supportLinks = [
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  const servicesLinks = [
    { name: "Online Ordering", href: "/ordering" },
    { name: "Table Booking", href: "/reservation" },
    { name: "Catering", href: "/catering" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#facebook", label: "Facebook", color: "#1877F2" },
    { icon: Twitter, href: "#twitter", label: "Twitter", color: "#1DA1F2" },
    { icon: Instagram, href: "#instagram", label: "Instagram", color: "linear-gradient(45deg, #F58529, #FEDA77, #DD2A7B, #8134AF, #515BD4)" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn", color: "#0A66C2" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="Graphura Logo" />
            </div>

            <p className="footer-description semi-bold">
              Modernizing restaurant operations with digital solutions.
            </p>

            <div className="footer-social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="footer-social-link"
                  style={{ background: social.color }}
                  aria-label={social.label}
                >
                  <social.icon className="footer-social-icon" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h3 className="footer-heading">Support</h3>
            <ul className="footer-links">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section footer-contact">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="contact-list">
              <li>
                <span className="contact-label">Address:</span>
                <p>
                  Graphura India Pvt. Ltd., Near RSF, Pataudi, Gurgaon, Haryana 122503
                </p>
              </li>

              <li>
                <span className="contact-label">Phone:</span>
                <a href="tel:+917378021327">+91 73780 21327</a>
              </li>

              <li>
                <span className="contact-label">Email:</span>
                <a href="mailto:support@graphura.in">support@graphura.in</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            © 2025 Graphura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}