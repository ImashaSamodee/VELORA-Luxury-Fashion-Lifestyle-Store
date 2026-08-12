import { useState, useContext } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='navbar-wrapper'>
      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <div className="announcement-content">
          <div className="announcement-left">
            <span>🚚</span> FREE SHIPPING ON ORDERS OVER $100 <span>✨</span>
          </div>
          <div className="announcement-right">
            <a href="#track">Track Order</a>
            <span className="dot-sep">•</span>
            <a href="#help">Help</a>
            <span className="dot-sep">•</span>
            <span className="currency-selector">USD ▾</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className='navbar'>
        <div className="navbar-container">
          <Link to="/" style={{ textDecoration: 'none' }} className='nav-logo'>
            <img src={logo} alt="VELORA Logo" />
            <p>VELORA</p>
          </Link>

          <ul className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-active' : ''}`}>
            <li className={menu === "shop" ? "nav-item-active" : ""} onClick={() => { setMenu("shop"); setIsMobileMenuOpen(false); }}>
              <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>Shop</Link>
            </li>
            <li className={menu === "mens" ? "nav-item-active" : ""} onClick={() => { setMenu("mens"); setIsMobileMenuOpen(false); }}>
              <Link to='/mens' style={{ textDecoration: "none", color: "inherit" }}>Men</Link>
            </li>
            <li className={menu === "womens" ? "nav-item-active" : ""} onClick={() => { setMenu("womens"); setIsMobileMenuOpen(false); }}>
              <Link to='/womens' style={{ textDecoration: "none", color: "inherit" }}>Women</Link>
            </li>
            <li className={menu === "kids" ? "nav-item-active" : ""} onClick={() => { setMenu("kids"); setIsMobileMenuOpen(false); }}>
              <Link to='/kids' style={{ textDecoration: "none", color: "inherit" }}>Kids</Link>
            </li>
            <li className={menu === "new" ? "nav-item-active" : ""} onClick={() => { setMenu("new"); setIsMobileMenuOpen(false); }}>
              <Link to='/new-in' style={{ textDecoration: "none", color: "inherit" }}>New In</Link>
            </li>
            <li className={menu === "sale" ? "nav-item-active" : ""} onClick={() => { setMenu("sale"); setIsMobileMenuOpen(false); }}>
              <Link to='/sale' style={{ textDecoration: "none", color: "inherit" }}>Sale</Link>
            </li>
          </ul>

          <div className="Nav-login-cart">
            <Link to='/cart' className="nav-cart-wrapper" aria-label="Shopping Cart">
              <img src={cart_icon} alt="Cart" />
              <div className="nav-cart-count">{getTotalCartItems()}</div>
            </Link>

            <Link to='/login' style={{ textDecoration: 'none' }}>
              <button className="nav-login-btn">
                <span>Login</span>
                <span className="btn-arrow">→</span>
              </button>
            </Link>

            <div className="nav-hamburger" onClick={toggleMobileMenu}>
              <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
              <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
              <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
