import React, { useState, useContext } from 'react';
import './CSS/NewIn.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import new_in_banner from '../Components/Assets/banner_women_new.jpg';

const NewIn = () => {
  const { all_product } = useContext(ShopContext);
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  // Get products marked as new or recent items
  const getNewProducts = () => {
    if (!all_product) return [];
    
    // Filter by category
    let filtered = all_product.filter((item) => {
      if (filterCategory === "all") return true;
      return item.category === filterCategory;
    });

    // Sort products
    if (sortBy === "low-high") {
      filtered = [...filtered].sort((a, b) => a.new_price - b.new_price);
    } else if (sortBy === "high-low") {
      filtered = [...filtered].sort((a, b) => b.new_price - a.new_price);
    }

    return filtered;
  };

  const newProductsList = getNewProducts();

  return (
    <div className='new-in-page'>
      {/* Top Hero Banner */}
      <div className="new-in-banner-container">
        <img src={new_in_banner} alt="New In Banner" className="new-in-banner-img" />
        <div className="new-in-banner-overlay">
          <span className="banner-badge">FALL/WINTER COLLECTION</span>
          <h1>JUST LANDED: NEW IN</h1>
          <p>Explore the newest arrivals crafted with luxury fabrics and modern cuts.</p>
        </div>
      </div>

      {/* Filter and Sort Toolbar */}
      <div className="new-in-toolbar">
        <div className="category-filter-pills">
          <button 
            className={`filter-pill ${filterCategory === 'all' ? 'active' : ''}`}
            onClick={() => setFilterCategory('all')}
          >
            All New ({all_product ? all_product.length : 0})
          </button>
          <button 
            className={`filter-pill ${filterCategory === 'women' ? 'active' : ''}`}
            onClick={() => setFilterCategory('women')}
          >
            Women
          </button>
          <button 
            className={`filter-pill ${filterCategory === 'men' ? 'active' : ''}`}
            onClick={() => setFilterCategory('men')}
          >
            Men
          </button>
          <button 
            className={`filter-pill ${filterCategory === 'kid' ? 'active' : ''}`}
            onClick={() => setFilterCategory('kid')}
          >
            Kids
          </button>
        </div>

        <div className="new-in-sort-box">
          <label htmlFor="sort-select">Sort by:</label>
          <select 
            id="sort-select" 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-dropdown"
          >
            <option value="featured">Featured / Newest</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid Container */}
      <div className="new-in-grid-container">
        <div className="new-in-products-grid">
          {newProductsList.map((item, i) => (
            <Item 
              key={i} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price}
              badge="NEW"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewIn;
