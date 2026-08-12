import React, { useState } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  // Calculate discount percentage if old_price exists
  const discountPercent = props.old_price 
    ? Math.round(((props.old_price - props.new_price) / props.old_price) * 100)
    : null;

  return (
    <div className='item-card'>
      <div className="item-img-box">
        <Link to={`/product/${props.id}`}>
          <img src={props.image} alt={props.name} className="item-main-img" />
        </Link>

        {/* Badge: Discount or NEW */}
        {props.badge ? (
          <span className={`item-badge badge-${props.badge.toLowerCase()}`}>{props.badge}</span>
        ) : discountPercent > 0 ? (
          <span className="item-badge badge-discount">-{discountPercent}%</span>
        ) : null}

        {/* Wishlist Heart Button */}
        <button 
          className={`wishlist-heart-btn ${isLiked ? 'liked' : ''}`} 
          onClick={() => setIsLiked(!isLiked)}
          aria-label="Add to Wishlist"
        >
          <svg viewBox="0 0 24 24" fill={isLiked ? "#ff4141" : "none"} stroke={isLiked ? "#ff4141" : "#475569"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>

      <div className="item-details">
        <Link to={`/product/${props.id}`} className="item-title-link">
          <h4 className="item-name">{props.name}</h4>
        </Link>
        <div className="item-prices">
          <span className="item-price-new">${props.new_price}</span>
          {props.old_price && <span className="item-price-old">${props.old_price}</span>}
        </div>
      </div>
    </div>
  );
};

export default Item;
