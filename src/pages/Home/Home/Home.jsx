import React from "react";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import SellEasilyBanner from "../SellEasilyBanner/SellEasilyBanner";
import PopularBrands from "../PopularBrands/PopularBrands";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import TrendingProducts from "../TrendingProducts/TrendingProducts";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  return (
    <div>
      <Banner />
      <TrendingProducts />
      <ShopByCategory />
      <FeaturedProducts />
      <PopularBrands />
      <SellEasilyBanner />
      <Reviews />
    </div>
  );
};

export default Home;
