import React from "react";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import SellEasilyBanner from "../SellEasilyBanner/SellEasilyBanner";
import PopularBrands from "../PopularBrands/PopularBrands";

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularBrands />
      <SellEasilyBanner />
      <Reviews />
    </div>
  );
};

export default Home;
