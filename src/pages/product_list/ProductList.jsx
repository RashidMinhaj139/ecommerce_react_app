import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";
import Products from "../../components/products/Products";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import "./productlist.css";
const ProductList = () => {
  return (
    <div>
      <div className="productList_container">
        <Navbar />
        <Announcement />
        <h1 className="title">Dresses</h1>
        <div className="filter_container">
          <div className="filter">
            <div className="filter_text">Filter products: </div>
            <select className="select">
              <option disabled selected>
                color
              </option>
              <option>white</option>
              <option>red</option>
              <option>black</option>
              <option>blue</option>
              <option>yellow</option>
              <option>green</option>
            </select>
            <select className="select2">
              <option disabled selected>
                Size
              </option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>

          {/* second */}
          <div className="filter">
            <div className="filter_text">Sort Products: </div>
            <select className="select">
              <option selected>Newest</option>
              <option>Price (asc)</option>
              <option>Price (desc)</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
