import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            {/* Top Wave Shape SVG */}
            <div className="footer-wave">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
                        fill="#0f172a"
                    ></path>
                </svg>
            </div>

            <div className="footer-content">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col brand-col">
                        <div className="footer-logo">
                            <img src={footer_logo} alt="VELORA Logo" />
                            <p>VELORA</p>
                        </div>
                        <p className="footer-desc">
                            Your ultimate destination for luxury fashion, style, and quality products. Discover trends that fit your lifestyle.
                        </p>
                        <div className="footer-socials">
                            <a href="#instagram" className="social-icon" aria-label="Instagram">
                                <img src={instagram_icon} alt="Instagram" />
                            </a>
                            <a href="#pinterest" className="social-icon" aria-label="Pinterest">
                                <img src={pintester_icon} alt="Pinterest" />
                            </a>
                            <a href="#whatsapp" className="social-icon" aria-label="WhatsApp">
                                <img src={whatsapp_icon} alt="WhatsApp" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h3>Categories</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Shop</Link></li>
                            <li><Link to="/mens">Men's Fashion</Link></li>
                            <li><Link to="/womens">Women's Fashion</Link></li>
                            <li><Link to="/kids">Kids Collection</Link></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="footer-col">
                        <h3>Company</h3>
                        <ul className="footer-links">
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#offices">Offices</a></li>
                            <li><a href="#contact">Contact Support</a></li>
                            <li><a href="#privacy">Privacy Policy</a></li>
                            <li><a href="#terms">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Newsletter / Stay Connected */}
                    <div className="footer-col newsletter-col">
                        <h3>Stay Connected</h3>
                        <p>Subscribe to receive exclusive deals and new updates!</p>
                        <div className="footer-input-box">
                            <input type="email" placeholder="Enter your email" />
                            <button type="button">Join</button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-divider"></div>
                    <div className="footer-bottom-content">
                        <p>© 2026 VELORA. All Rights Reserved.</p>
                        <div className="footer-payment-badges">
                            <span>💳 Secure Payments</span>
                            <span>🚚 Fast Delivery</span>
                            <span>🔒 100% Guaranteed</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
