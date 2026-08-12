import React from 'react';
import './Offers.css';
import limited_image from '../Assets/limited_edition_promo.png';

const Offers = () => {
  return (
    <section className="offers-container">
      <div className="offers">
        <div className="offers-card-wrapper">
          <div className="offers-left">
            <h1>Limited Edition</h1>
            <h2>Collection Just For You</h2>
            <p>GET 15% EXTRA OFF ON YOUR FIRST PURCHASE</p>
            <button>Shop Collection →</button>
          </div>
          <div className="offers-right">
            <div className="offers-img-wrapper">
              <img src={limited_image} alt="Limited Edition Promo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
