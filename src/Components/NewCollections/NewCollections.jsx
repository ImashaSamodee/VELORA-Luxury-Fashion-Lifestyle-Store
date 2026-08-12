import React from 'react';
import './NewCollections.css';
import new_collection from '../Assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
  return (
    <section className="new-collections-section">
      <div className="new-collections-container">
        {/* Section Header */}
        <div className="section-header-row">
          <div>
            <span className="section-tag-red">FRESH ARRIVALS</span>
            <h2 className="section-title">New Collections</h2>
          </div>
          <a href="#view-new" className="view-all-link">
            <span>View All New</span>
            <span>→</span>
          </a>
        </div>

        {/* Collections Product Grid */}
        <div className="collections-grid">
          {new_collection.map((item, i) => {
            return (
              <Item 
                key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewCollections;
