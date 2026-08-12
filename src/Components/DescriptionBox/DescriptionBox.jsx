import React, { useState } from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
    const [activeTab, setActiveTab] = useState('description');

    return (
        <div className='descriptionbox'>
            {/* Header Navigator Tabs */}
            <div className="descriptionbox-navigator">
                <button
                    className={`descriptionbox-nav-btn ${activeTab === 'description' ? 'active' : ''}`}
                    onClick={() => setActiveTab('description')}
                >
                    <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    <span>Product Description</span>
                </button>
                <button
                    className={`descriptionbox-nav-btn ${activeTab === 'reviews' ? 'active' : ''}`}
                    onClick={() => setActiveTab('reviews')}
                >
                    <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    <span>Customer Reviews</span>
                    <span className="review-count-badge">122</span>
                </button>
            </div>

            {/* Tab Contents Card */}
            <div className="descriptionbox-content-card">
                {activeTab === 'description' ? (
                    <div className="tab-pane fade-in">
                        <div className="description-header">
                            <h3>Product Overview</h3>
                            <p className="lead-text">
                                Elevate your everyday style with VELORA's signature craftsmanship. Designed with modern aesthetics and supreme comfort in mind, this piece offers the perfect blend of luxury and functionality.
                            </p>
                        </div>

                        <div className="description-grid">
                            <div className="desc-feature-card">
                                <div className="feature-icon">✨</div>
                                <h4>Premium Quality</h4>
                                <p>Crafted using 100% organic long-staple cotton for unmatched softness and long-lasting durability.</p>
                            </div>
                            <div className="desc-feature-card">
                                <div className="feature-icon">🌿</div>
                                <h4>Eco-Conscious</h4>
                                <p>Sustainably manufactured with non-toxic, eco-friendly dyes and minimal environmental footprint.</p>
                            </div>
                            <div className="desc-feature-card">
                                <div className="feature-icon">🎯</div>
                                <h4>Tailored Fit</h4>
                                <p>Precision fit engineered to flatter all body types, providing flexibility for effortless daily wear.</p>
                            </div>
                        </div>

                        <div className="description-details-list">
                            <h4>Highlights & Specifications</h4>
                            <ul>
                                <li><strong>Material:</strong> 100% Breathable Combed Cotton</li>
                                <li><strong>Fit Type:</strong> Modern Regular Fit</li>
                                <li><strong>Care Instructions:</strong> Machine wash cold with like colors, tumble dry low</li>
                                <li><strong>Country of Origin:</strong> Designed in Europe, Handcrafted Ethically</li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className="tab-pane fade-in">
                        {/* Rating Summary Header */}
                        <div className="rating-summary-card">
                            <div className="rating-score-box">
                                <div className="score-number">4.9</div>
                                <div className="stars-row">★★★★★</div>
                                <div className="total-reviews-text">Based on 122 reviews</div>
                            </div>

                            <div className="rating-bars">
                                <div className="bar-row">
                                    <span>5 Stars</span>
                                    <div className="bar-track"><div className="bar-fill" style={{ width: '88%' }}></div></div>
                                    <span>88%</span>
                                </div>
                                <div className="bar-row">
                                    <span>4 Stars</span>
                                    <div className="bar-track"><div className="bar-fill" style={{ width: '9%' }}></div></div>
                                    <span>9%</span>
                                </div>
                                <div className="bar-row">
                                    <span>3 Stars</span>
                                    <div className="bar-track"><div className="bar-fill" style={{ width: '3%' }}></div></div>
                                    <span>3%</span>
                                </div>
                            </div>

                            <button className="write-review-btn">Write a Review</button>
                        </div>

                        {/* Customer Review Items */}
                        <div className="reviews-list">
                            <div className="review-card">
                                <div className="review-user-info">
                                    <div className="user-avatar">JD</div>
                                    <div>
                                        <div className="user-name">
                                            <strong>John Doe</strong>
                                            <span className="verified-badge">✓ Verified Buyer</span>
                                        </div>
                                        <span className="review-date">2 days ago</span>
                                    </div>
                                </div>
                                <div className="review-stars">★★★★★</div>
                                <h5 className="review-title">Exceptional Quality & Perfect Fit</h5>
                                <p className="review-body">
                                    Absolutely love the fabric quality! Fits true to size and feels incredibly soft against the skin. Will definitely be buying more from VELORA.
                                </p>
                            </div>

                            <div className="review-card">
                                <div className="review-user-info">
                                    <div className="user-avatar avatar-pink">SM</div>
                                    <div>
                                        <div className="user-name">
                                            <strong>Sarah Miller</strong>
                                            <span className="verified-badge">✓ Verified Buyer</span>
                                        </div>
                                        <span className="review-date">1 week ago</span>
                                    </div>
                                </div>
                                <div className="review-stars">★★★★★</div>
                                <h5 className="review-title">Stylish & Fast Delivery!</h5>
                                <p className="review-body">
                                    The delivery was super quick, and the packaging was luxurious. The color matches the pictures perfectly. Highly recommended!
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DescriptionBox;
