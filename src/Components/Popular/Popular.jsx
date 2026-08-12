import React, { useContext } from 'react';
import './Popular.css';
import { ShopContext } from '../../Context/ShopContext';
import Item from '../Item/Item';

const Popular = () => {
  const { all_product } = useContext(ShopContext);

  // Get 5 best seller items across categories
  const bestSellers = all_product ? [
    { ...all_product[12], badge: "NEW" }, // Men shirt
    { ...all_product[13], badge: "NEW" }, // Men hoodie/jacket
    { ...all_product[0], badge: "-20%" },  // Women blazer
    { ...all_product[4], badge: "NEW" },  // Women top
    { ...all_product[16], badge: "-15%" }  // Men denim
  ] : [];

  return (
    <section className='popular-best-sellers-section'>
      <div className="popular-container">
        {/* Section Header */}
        <div className="section-header-row">
          <div>
            <span className="section-tag-red">BEST SELLERS</span>
            <h2 className="section-title">Our Best Sellers</h2>
          </div>
          <a href="#all-products" className="view-all-link">
            <span>View All Products</span>
            <span>→</span>
          </a>
        </div>

        {/* Product Cards Grid */}
        <div className="popular-products-grid">
          {bestSellers.map((item, i) => (
            <Item 
              key={i} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price}
              badge={item.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
