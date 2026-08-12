import React from 'react';
import './Hero.css';
import hero_model from '../Assets/product_3.png';
import blazer_thumb from '../Assets/product_1.png';

const Hero = () => {
  return (
    <section className='hero-section'>
      <div className="hero-container">
        {/* Left Column Text Content */}
        <div className="hero-left-content">
          <div className="hero-tag">
            <span className="sparkle-icon">✨</span> NEW ARRIVALS ONLY
          </div>

          <h1 className="hero-headline">
            DEFINE YOUR <br />
            <span className="text-dark-bold">SIGNATURE</span> <br />
            <span className="text-coral-highlight">STYLE</span>
          </h1>

          <p className="hero-subtext">
            Elevate your wardrobe with timeless pieces crafted for comfort, designed for you.
          </p>

          <div className="hero-cta-group">
            <a href="#shop-new" className="cta-btn-primary">
              <span>Shop New Arrivals</span>
              <span className="arrow-icon">→</span>
            </a>
            <button className="cta-btn-secondary">
              <span className="play-icon">▶</span>
              <span>View Lookbook</span>
            </button>
          </div>

          {/* Three Feature Highlights */}
          <div className="hero-features-row">
            <div className="feature-item">
              <div className="feature-icon-box">🌹</div>
              <div className="feature-text-box">
                <strong>Premium Quality</strong>
                <span>Finest fabrics</span>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-box">🔄</div>
              <div className="feature-text-box">
                <strong>Easy Returns</strong>
                <span>30-day returns</span>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-box">🔒</div>
              <div className="feature-text-box">
                <strong>Secure Payment</strong>
                <span>100% secure</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Editorial Image Container */}
        <div className="hero-right-media">
          <div className="hero-media-wrapper">
            <img src={hero_model} alt="VELORA Editorial High Fashion Blazer Model" className="hero-main-img" />

            {/* Floating Product Badge Card */}
            <div className="floating-product-card">
              <img src={blazer_thumb} alt="Oversized Blazer Thumbnail" className="thumb-img" />
              <div className="card-info">
                <span className="product-name">Oversized Blazer</span>
                <span className="product-price">$79.99</span>
                <div className="carousel-dots">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
