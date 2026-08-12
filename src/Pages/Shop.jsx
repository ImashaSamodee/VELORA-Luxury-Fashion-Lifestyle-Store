import React from 'react';
import Hero from '../Components/Hero/Hero';
import CollectionBanners from '../Components/CollectionBanners/CollectionBanners';
import ShopByCategory from '../Components/ShopByCategory/ShopByCategory';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

const Shop = () => {
  return (
    <div className="shop-page-wrapper">
      <Hero />
      <CollectionBanners />
      <ShopByCategory />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Shop;
