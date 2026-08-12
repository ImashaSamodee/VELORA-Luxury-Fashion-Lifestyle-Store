import React from 'react';
import './ShopByCategory.css';

const ShopByCategory = () => {
    const categories = [
        { name: 'T-Shirts', icon: '👕', bg: '#fee2e2', border: '#fca5a5' },
        { name: 'Shirts', icon: '👔', bg: '#e0f2fe', border: '#93c5fd' },
        { name: 'Hoodies', icon: '🧥', bg: '#ffedd5', border: '#fdba74' },
        { name: 'Jackets', icon: '🧥', bg: '#dcfce7', border: '#86efac' },
        { name: 'Jeans', icon: '👖', bg: '#e0e7ff', border: '#a5b4fc' },
        { name: 'Shoes', icon: '👟', bg: '#f3e8ff', border: '#d8b4fe' },
        { name: 'Bags', icon: '👜', bg: '#fce7f3', border: '#f9a8d4' },
        { name: 'Accessories', icon: '👓', bg: '#fef3c7', border: '#fcd34d' },
    ];

    return (
        <section className="shop-by-category-section">
            <div className="category-section-container">
                {/* Section Header */}
                <div className="section-header-row">
                    <div>
                        <span className="section-tag-red">TRENDING NOW</span>
                        <h2 className="section-title">Shop By Category</h2>
                    </div>
                    <a href="#all-categories" className="view-all-link">
                        <span>View All Categories</span>
                        <span>→</span>
                    </a>
                </div>

                {/* Categories Grid */}
                <div className="categories-icon-grid">
                    {categories.map((cat, idx) => (
                        <a href={`#${cat.name.toLowerCase()}`} key={idx} className="category-circle-item">
                            <div 
                              className="circle-icon-box" 
                              style={{ backgroundColor: cat.bg, borderColor: cat.border }}
                            >
                                <span className="cat-emoji">{cat.icon}</span>
                            </div>
                            <span className="cat-name-label">{cat.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShopByCategory;
