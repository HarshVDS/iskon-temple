import React, { useEffect, useState } from 'react';
import "../assets/css/animate.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/boxicons.min.css";
import "../assets/css/meanmenu.min.css";
import "../assets/css/nice-select.min.css";
import "../assets/css/odometer.min.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/responsive.css";
import "../assets/css/style.css";
import "../assets/css/dark.css";
import "../assets/css/flaticon.css";
import logo from '../assets/imgs/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { toast } from 'react-toastify';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [authDropdownOpen, setAuthDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");
      setIsLoggedIn(!!token);
      if (user) {
        const userData = JSON.parse(user);
        setIsAdmin(userData.isAdmin || false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event) => {
      if (activeDropdown && !event.target.closest('.dropdown')) {
        setActiveDropdown(null);
      }
      if (authDropdownOpen && !event.target.closest('.user-dropdown')) {
        setAuthDropdownOpen(false);
      }
    };

    checkAuth();
    window.addEventListener("authChanged", checkAuth);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener("authChanged", checkAuth);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeDropdown, authDropdownOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("authChanged"));
    setIsLoggedIn(false);
    setIsAdmin(false);
    navigate("/login");
    setMobileMenuOpen(false);
  };

  const protectedNavigate = (path) => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Please login first', { autoClose: 2000 });
      navigate('/login');
    } else {
      navigate(path);
      setMobileMenuOpen(false);
    }
  };

  const navigateAndClose = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const toggleDropdown = (dropdownName) => {
    console.log('Toggle dropdown called:', dropdownName, 'Current state:', activeDropdown);
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`header-area ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo" onClick={() => navigate("/")}>
            <img src={logo} alt="logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-links">
              <li>
                <a 
                  onClick={() => navigate("/")} 
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                >
                  Home
                  {isActive('/') && <span className="active-indicator"></span>}
                </a>
              </li>
              <li>
                <a 
                  onClick={() => protectedNavigate("/aboutus")} 
                  className={`nav-link ${isActive('/aboutus') ? 'active' : ''}`}
                >
                  About Us
                  {isActive('/aboutus') && <span className="active-indicator"></span>}
                </a>
              </li>
              <li>
                <a 
                  onClick={() => protectedNavigate("/implementationProcess")} 
                  className={`nav-link ${isActive('/implementationProcess') ? 'active' : ''}`}
                >
                  Implementation Process
                  {isActive('/implementationProcess') && <span className="active-indicator"></span>}
                </a>
              </li>
              <li 
                className={`dropdown ${activeDropdown === 'involved' ? 'open' : ''}`}
                style={{ position: 'relative' }}
              >
                <a 
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Dropdown clicked! Current state:', activeDropdown);
                    toggleDropdown('involved');
                  }}
                  style={{ 
                    cursor: 'pointer',
                    color: activeDropdown === 'involved' ? '#f99115' : '#333'
                  }}
                >
                  How to get involved <i className="bx bx-chevron-down" />
                </a>
                <div 
                  className="dropdown-menu"
                  style={{
                    display: activeDropdown === 'involved' ? 'block' : 'none',
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    background: '#fff',
                    minWidth: '220px',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    borderRadius: '8px',
                    padding: '8px 0',
                    zIndex: 1000,
                    border: '1px solid #eee'
                  }}
                >
                  <a 
                    onClick={() => protectedNavigate("/discipleRegistration")} 
                    className="dropdown-item"
                    style={{
                      display: 'block',
                      padding: '12px 20px',
                      color: '#333',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      border: 'none',
                      background: 'none',
                      width: '100%',
                      textAlign: 'left',
                      fontWeight: '500'
                    }}
                  >
                    SP Disciple
                  </a>
                  <a 
                    onClick={() => protectedNavigate("/Volunteer")} 
                    className="dropdown-item"
                    style={{
                      display: 'block',
                      padding: '12px 20px',
                      color: '#333',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      border: 'none',
                      background: 'none',
                      width: '100%',
                      textAlign: 'left',
                      fontWeight: '500'
                    }}
                  >
                    Become a Volunteer
                  </a>
                  <a 
                    onClick={() => protectedNavigate("/donation")} 
                    className="dropdown-item"
                    style={{
                      display: 'block',
                      padding: '12px 20px',
                      color: '#333',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      border: 'none',
                      background: 'none',
                      width: '100%',
                      textAlign: 'left',
                      fontWeight: '500'
                    }}
                  >
                    Donation
                  </a>
                  <a 
                    onClick={() => protectedNavigate("/Host")} 
                    className="dropdown-item"
                    style={{
                      display: 'block',
                      padding: '12px 20px',
                      color: '#333',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      border: 'none',
                      background: 'none',
                      width: '100%',
                      textAlign: 'left',
                      fontWeight: '500'
                    }}
                  >
                    Become a host
                  </a>
                </div>
              </li>
              <li>
                <a 
                  onClick={() => protectedNavigate("/events")} 
                  className={`nav-link ${isActive('/events') ? 'active' : ''}`}
                >
                  Success Stories
                  {isActive('/events') && <span className="active-indicator"></span>}
                </a>
              </li>
              <li>
                <a 
                  onClick={() => protectedNavigate("/contactus")} 
                  className={`nav-link ${isActive('/contactus') ? 'active' : ''}`}
                >
                  Contact Us
                  {isActive('/contactus') && <span className="active-indicator"></span>}
                </a>
              </li>
            </ul>

            {/* Auth Section */}
            <div className="auth-section">
              {isLoggedIn ? (
                <div className="logged-in-actions">
                  {isAdmin && (
                    <button
                      onClick={() => protectedNavigate('/admin')}
                      className="admin-btn"
                    >
                      Admin Dashboard
                    </button>
                  )}
                  <div className="user-dropdown">
                    <button 
                      className="user-btn"
                      onClick={() => setAuthDropdownOpen(!authDropdownOpen)}
                    >
                      <FaUserCircle size={24} />
                      <span>My Account</span>
                    </button>
                    {authDropdownOpen && (
                      <div className="dropdown-content">
                        <button onClick={() => protectedNavigate('/myaccount')}>Profile</button>
                        <button onClick={handleLogout}>Logout</button>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="auth-buttons">
                  <button onClick={() => navigate("/login")} className="signin-btn">Sign In</button>
                  <button onClick={() => navigate("/register")} className="signup-btn">Sign Up</button>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-btn">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          <ul className="mobile-nav-links">
            <li>
              <a 
                onClick={() => navigateAndClose("/")} 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                onClick={() => protectedNavigate("/aboutus")} 
                className={`nav-link ${isActive('/aboutus') ? 'active' : ''}`}
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                onClick={() => protectedNavigate("/implementationProcess")} 
                className={`nav-link ${isActive('/implementationProcess') ? 'active' : ''}`}
              >
                Implementation Process
              </a>
            </li>
            <li className="mobile-dropdown">
              <a 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleDropdown('mobile-involved');
                }}
              >
                How to get involved <i className={`bx bx-chevron-${activeDropdown === 'mobile-involved' ? 'up' : 'down'}`} />
              </a>
              <div className={`mobile-dropdown-menu ${activeDropdown === 'mobile-involved' ? 'open' : ''}`}>
                <a 
                  onClick={() => protectedNavigate("/discipleRegistration")} 
                  className="dropdown-item"
                  style={{
                    display: 'block',
                    padding: '12px 20px',
                    color: '#333',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    background: 'none',
                    width: '100%',
                    textAlign: 'left',
                    fontWeight: '500'
                  }}
                >
                  SP Disciple
                </a>
                <a 
                  onClick={() => protectedNavigate("/Volunteer")} 
                  className="dropdown-item"
                  style={{
                    display: 'block',
                    padding: '12px 20px',
                    color: '#333',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    background: 'none',
                    width: '100%',
                    textAlign: 'left',
                    fontWeight: '500'
                  }}
                >
                  Become a Volunteer
                </a>
                <a 
                  onClick={() => protectedNavigate("/donation")} 
                  className="dropdown-item"
                  style={{
                    display: 'block',
                    padding: '12px 20px',
                    color: '#333',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    background: 'none',
                    width: '100%',
                    textAlign: 'left',
                    fontWeight: '500'
                  }}
                >
                  Donation
                </a>
                <a 
                  onClick={() => protectedNavigate("/Host")} 
                  className="dropdown-item"
                  style={{
                    display: 'block',
                    padding: '12px 20px',
                    color: '#333',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    background: 'none',
                    width: '100%',
                    textAlign: 'left',
                    fontWeight: '500'
                  }}
                >
                  Become a host
                </a>
              </div>
            </li>
            <li>
              <a 
                onClick={() => protectedNavigate("/events")} 
                className={`nav-link ${isActive('/events') ? 'active' : ''}`}
              >
                Success Stories
              </a>
            </li>
            <li>
              <a 
                onClick={() => protectedNavigate("/contactus")} 
                className={`nav-link ${isActive('/contactus') ? 'active' : ''}`}
              >
                Contact Us
              </a>
            </li>
          </ul>

          <div className="mobile-auth-section">
            {isLoggedIn ? (
              <>
                {isAdmin && (
                  <button
                    onClick={() => protectedNavigate('/admin')}
                    className="mobile-admin-btn"
                  >
                    Admin Dashboard
                  </button>
                )}
                <button onClick={() => protectedNavigate('/myaccount')} className="mobile-account-btn">
                  My Account
                </button>
                <button onClick={handleLogout} className="mobile-logout-btn">
                  Logout
                </button>
              </>
            ) : (
              <>
                <button onClick={() => navigateAndClose("/login")} className="mobile-signin-btn">Sign In</button>
                <button onClick={() => navigateAndClose("/register")} className="mobile-signup-btn">Sign Up</button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;