import {
  UtensilsCrossed,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import "../style/Footer.css";
import logo from "../assets/Graphura logo Black.png";

export default function Footer() {
  const companyLinks = [
    { name: "About Us", href: "#about" },
    { name: "Why Choose Us", href: "#careers" },
    { name: "Our Story", href: "#blog" },
  ];

  const supportLinks = [
    { name: "Contact Us", href: "#contact" },
    { name: "FAQ", href: "#faq" },
    { name: "Privacy Policy", href: "#privacy" },
  ];

  const servicesLinks = [
    { name: "Online Ordering", href: "#ordering" },
    { name: "Table Booking", href: "#booking" },
    { name: "Catering", href: "#catering" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#facebook", label: "Facebook" },
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Instagram, href: "#instagram", label: "Instagram" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="" />
            </div>
            <p className="footer-description semi-bold">
              Modernizing restaurant operations with digital solutions.
            </p>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  id={social.label}
                  key={social.label}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                >
                  <social.icon className="social-icon" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Support</h3>
            <ul className="footer-links">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section footer-contact">
            <h3 className="footer-heading">Contact Us</h3>

            <ul className="contact-list">
              <li>
                <span className="contact-label">Address:</span>
                <p>
                  Graphura India Pvt. Ltd., Near RSF, Pataudi, Gurgaon, Haryana
                  122503
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

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="copyright">© 2025 Graphura. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
