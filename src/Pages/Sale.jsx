import React, { useState, useEffect, useContext } from 'react';
import './CSS/Sale.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import sale_banner from '../Components/Assets/banner_sale.png';

const Sale = () => {
  const { all_product } = useContext(ShopContext);
  const [filterCategory, setFilterCategory] = useState("all");
  const [discountFilter, setDiscountFilter] = useState("all");
  const [sortBy, setSortBy] = useState("highest-discount");
  const [copiedCode, setCopiedCode] = useState(false);

  // Live Countdown Timer (5 hours countdown)
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 42, seconds: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText("VELORA15");
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  // Generate sale items with discounts
  const getSaleProducts = () => {
    if (!all_product) return [];

    // Filter items that have old_price (on discount)
    let saleItems = all_product.map((item, idx) => {
      const discount = Math.round(((item.old_price - item.new_price) / item.old_price) * 100);
      return { ...item, discountPercent: discount };
    });

    // Category filter
    if (filterCategory !== "all") {
      saleItems = saleItems.filter(item => item.category === filterCategory);
    }

    // Discount range filter
    if (discountFilter === "50") {
      saleItems = saleItems.filter(item => item.discountPercent >= 40);
    } else if (discountFilter === "under60") {
      saleItems = saleItems.filter(item => item.new_price <= 60);
    }

    // Sort
    if (sortBy === "highest-discount") {
      saleItems.sort((a, b) => b.discountPercent - a.discountPercent);
    } else if (sortBy === "low-high") {
      saleItems.sort((a, b) => a.new_price - b.new_price);
    } else if (sortBy === "high-low") {
      saleItems.sort((a, b) => b.new_price - a.new_price);
    }

    return saleItems;
  };

  const saleProducts = getSaleProducts();

  return (
    <div className='sale-page'>
      {/* Ticking Flash Sale Announcement Header Bar */}
      <div className="sale-countdown-bar">
        <div className="countdown-content">
          <span className="fire-icon">🔥</span>
          <span className="countdown-label">FLASH SALE ENDS IN:</span>
          <div className="timer-boxes">
            <span className="timer-box">{String(timeLeft.hours).padStart(2, '0')}h</span> :
            <span className="timer-box">{String(timeLeft.minutes).padStart(2, '0')}m</span> :
            <span className="timer-box">{String(timeLeft.seconds).padStart(2, '0')}s</span>
          </div>
          <span className="sale-tag-extra">GET EXTRA 15% OFF AT CHECKOUT</span>
        </div>
      </div>

      {/* Hero Banner Section */}
      <div className="sale-hero-container">
        <img src={sale_banner} alt="VELORA Seasonal Sale Banner" className="sale-banner-img" />
        <div className="sale-banner-overlay">
          <span className="sale-red-badge">LIMITED TIME ONLY</span>
          <h1>SEASONAL MEGA SALE</h1>
          <h2>UP TO 50% OFF</h2>
          <p>Don't miss out on luxury essentials at unbelievable prices.</p>

          <div className="promo-code-pill" onClick={handleCopyCode}>
            <span>Use Code: <strong>VELORA15</strong></span>
            <button className="copy-code-btn">
              {copiedCode ? "COPIED! ✓" : "COPY CODE"}
            </button>
          </div>
        </div>
      </div>

      {/* Filters Toolbar */}
      <div className="sale-toolbar">
        <div className="sale-filter-group">
          <button 
            className={`sale-filter-btn ${filterCategory === 'all' && discountFilter === 'all' ? 'active' : ''}`}
            onClick={() => { setFilterCategory('all'); setDiscountFilter('all'); }}
          >
            All Deals ({all_product ? all_product.length : 0})
          </button>
          <button 
            className={`sale-filter-btn ${discountFilter === '50' ? 'active' : ''}`}
            onClick={() => setDiscountFilter('50')}
          >
            🔥 40%+ OFF
          </button>
          <button 
            className={`sale-filter-btn ${discountFilter === 'under60' ? 'active' : ''}`}
            onClick={() => setDiscountFilter('under60')}
          >
            💰 Under $60
          </button>
          <button 
            className={`sale-filter-btn ${filterCategory === 'women' ? 'active' : ''}`}
            onClick={() => { setFilterCategory('women'); setDiscountFilter('all'); }}
          >
            Women
          </button>
          <button 
            className={`sale-filter-btn ${filterCategory === 'men' ? 'active' : ''}`}
            onClick={() => { setFilterCategory('men'); setDiscountFilter('all'); }}
          >
            Men
          </button>
          <button 
            className={`sale-filter-btn ${filterCategory === 'kid' ? 'active' : ''}`}
            onClick={() => { setFilterCategory('kid'); setDiscountFilter('all'); }}
          >
            Kids
          </button>
        </div>

        <div className="sale-sort-box">
          <label htmlFor="sale-sort">Sort by:</label>
          <select 
            id="sale-sort"
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="sale-sort-dropdown"
          >
            <option value="highest-discount">Highest Discount</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Sale Product Grid */}
      <div className="sale-grid-container">
        <div className="sale-products-grid">
          {saleProducts.map((item, i) => (
            <Item 
              key={i} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price}
              badge={`-${item.discountPercent}%`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sale;
