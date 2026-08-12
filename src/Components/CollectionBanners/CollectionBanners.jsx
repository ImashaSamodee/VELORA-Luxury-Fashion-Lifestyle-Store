import React from 'react';
import './CollectionBanners.css';
import men_img from '../Assets/product_13.png';
import women_img from '../Assets/product_1.png';
import kids_img from '../Assets/product_25.png';
import footwear_img from '../Assets/banner_footwear.png';
import accessories_img from '../Assets/banner_accessories.png';
import { Link } from 'react-router-dom';

const CollectionBanners = () => {
    const collections = [
        { title: 'MEN', link: '/mens', img: men_img },
        { title: 'WOMEN', link: '/womens', img: women_img },
        { title: 'KIDS', link: '/kids', img: kids_img },
        { title: 'FOOTWEAR', link: '/footwear', img: footwear_img },
        { title: 'ACCESSORIES', link: '/accessories', img: accessories_img },
    ];

    return (
        <section className="collection-banners-section">
            <div className="collection-banners-container">
                {collections.map((item, index) => (
                    <Link to={item.link} key={index} className="collection-banner-card">
                        <div className="card-bg-img">
                            <img src={item.img} alt={`${item.title} Collection`} />
                        </div>
                        <div className="card-content-overlay">
                            <h3>{item.title}</h3>
                            <span className="card-sublink">Collections →</span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default CollectionBanners;
