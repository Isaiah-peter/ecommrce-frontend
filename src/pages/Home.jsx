import React from "react";
import Announcement from "../component/Announcement";
import Categories from "../component/Categories";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import NewLetter from "../component/NewLetter";
import Product from "../component/Product";
import Slider from "../component/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Product />
      <NewLetter />
      <Footer />
    </div>
  );
};

export default Home;
