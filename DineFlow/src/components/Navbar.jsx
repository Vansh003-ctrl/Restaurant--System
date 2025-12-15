import { useState, useEffect, useRef } from "react";
import { Menu, X, User } from "lucide-react";
import { GiShoppingCart } from "react-icons/gi";
import { NavLink, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../style/Navbar.css";
import logo from "../assets/Graphura logo Black.png";

export default function Navbar({ isAdmin = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const location = useLocation();

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

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setProfileOpen(false);
  }, [location]);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }

    if (profileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="navFlex">
            <div className="navbar-menu">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-nav-link" : ""}`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="navbar-container-second">
            {/* Cart */}
            <div className="cart-icon-wrapper">
              <NavLink to="/cart" className="nav-link cart-link">
                <GiShoppingCart size={26} />
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </NavLink>
            </div>

            {/* Profile */}
            <div className="profile-wrapper" ref={profileRef}>
              <button
                className="profile-btn"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <User size={28} />
              </button>

              {profileOpen && (
                <div className="profile-dropdown">
                  <NavLink to="/profile" className="profile-dropdown-item">
                    My Profile
                  </NavLink>
                  <NavLink to="/order" className="profile-dropdown-item">
                    My Orders
                  </NavLink>
                  <NavLink to="/login" className="profile-dropdown-item">
                    Logout
                  </NavLink>
                </div>
              )}
            </div>

            {/* Mobile Toggle */}
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
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `mobile-nav-link ${isActive ? "active-mobile-nav-link" : ""}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}