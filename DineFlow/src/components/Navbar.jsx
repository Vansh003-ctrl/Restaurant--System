import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../style/Navbar.css";
import logo from "../assets/Graphura logo Black.png";

export default function Navbar({ isAdmin = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Reservations", path: "/reservation" },
    { name: "Contact", path: "/contact" },
  ];

  if (isAdmin) {
    navItems.splice(
      4,
      0,
      { name: "Kitchen", path: "/kitchen" },
      { name: "Admin", path: "/admin" }
    );
  }

  const profileMenu = [
    { name: "My Profile", path: "/profile" },
    { name: "My Orders", path: "/order" },
    { name: "Logout", path: "/login" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          
          {/* Logo */}
          <div className="navbar-logo">
            <img src={logo} alt="logo" />
          </div>

          {/* Desktop Navigation */}
          <div className="navFlex">
            <div className="navbar-menu">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="nav-link flex items-center gap-2"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="navbar-container-second">

            {/* Cart */}
            <div className="cart-icon-wrapper">
              <Link to="/cart" className="nav-link cart-link flex items-center gap-2">
                <GiShoppingCart size={26} className="cart-icon" />
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </Link>
            </div>

            {/* Profile Dropdown */}
            <div className="profile-wrapper">
              <button
                className="profile-btn"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <User size={28} />
              </button>

              {profileOpen && (
                <div className="profile-dropdown">
                  {profileMenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="profile-dropdown-item"
                      onClick={() => setProfileOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="mobile-menu-button">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="menu-toggle"
              >
                {isOpen ? <X className="icon" /> : <Menu className="icon" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-items">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="mobile-nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Profile Menu */}
              <div className="mobile-profile-section">
                <div className="mobile-profile-title">Account</div>

                {profileMenu.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="mobile-nav-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}