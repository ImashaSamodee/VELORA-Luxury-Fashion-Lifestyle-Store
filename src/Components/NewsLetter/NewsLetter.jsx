import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <section className="newsletter-wrapper">
      <div className="newsletter-container">
        <div className="newsletter-card">
          <span className="newsletter-tag">JOIN THE VELORA CLUB</span>
          <h2>Get Exclusive Offers On Your Email</h2>
          <p>Subscribe to our newsletter and receive 15% off your first order plus secret sales update.</p>
          <div className="newsletter-input-group">
            <input type="email" placeholder='Enter your email address' />
            <button type="button">Subscribe →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
