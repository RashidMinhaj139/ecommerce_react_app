import React from "react";
import "./singleproduct.css";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import { Add, Remove } from "@mui/icons-material";

const Singleproduct = () => {
  return (
    <div className="single_container">
      <Announcement />
      <Navbar />
      <div className="single_wrapper">
        <div className="img_cont">
          <img
            src="https://i.ibb.co/S6qMxwr/jean.jpg"
            className="siingle_img"
          />
        </div>
        <div className="info_cont">
          <div className="single_title">Denim Jumpsuit</div>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </div>
          <div className="price">$ 20</div>
          <div className="filter_cont">
            <div className="filter">
              <div className="filter_title">Color</div>
              <div className="filter_color" color="darkblue"></div>
              <div className="filter_color" color="red"></div>
              <div className="filter_color" color="black"></div>
            </div>
            <div className="filter">
              <div className="filter_title">Size</div>
              <select className="filter_size">
                <option className="filter_size_option" color="darkblue">
                  XS
                </option>
                <option className="filter_size_option" color="darkblue">
                  XS
                </option>
                <option className="filter_size_option" color="darkblue">
                  X
                </option>
                <option className="filter_size_option" color="darkblue">
                  ML
                </option>
                <option className="filter_size_option" color="darkblue">
                  XL
                </option>
              </select>
            </div>
          </div>
          <div className="add_container">
            <div className="amount_container">
              <Remove />
              <div className="amount"> 1 </div>
              <Add />
            </div>
            <button className="single_btn">Add to cart</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Singleproduct;
