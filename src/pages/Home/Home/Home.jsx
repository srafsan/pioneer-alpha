import React from "react";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import SellEasilyBanner from "../SellEasilyBanner/SellEasilyBanner";

const Home = () => {
  return (
    <div>
      <Banner />
      <SellEasilyBanner />
      <Reviews />
    </div>
  );
};

export default Home;
