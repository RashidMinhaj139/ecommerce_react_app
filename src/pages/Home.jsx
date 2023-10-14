import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Announcement from "../components/announcement/Announcement";
import Slider from "../components/slider/Slider";
import Catagories from "../components/catagories/Catagories";
import Products from "../components/products/Products";
// import Product from "../components/products/Products";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Catagories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
