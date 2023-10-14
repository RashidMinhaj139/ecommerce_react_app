import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import "./cart.css";
import { Add, Remove } from "@mui/icons-material";
const Cart = () => {
  return (
    <div className="cart_cont">
      <Announcement />
      <Navbar />
      <div className="cart_wrapper">
        <h2 className="cart_tittle"> Your Bag</h2>
        <div className="cart_top">
          <button className="top_btn1">CONTINUE SHOPPING</button>
          <div className="topTexts">
            <a className="topText"> Shopping Bag(2)</a>
            <a className="topText"> your whishlist(0)</a>
          </div>
          <button className="top_btn">CheckOut Now</button>
        </div>
        <div className="cart_bottom">
          <div className="cart_info">
            <div className="cart_product">
              <div className="cart_productDetail">
                <img
                  className="cart_img"
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                />
                <div className="cart_Details">
                  <div className="cart_productName">
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </div>
                  <div className="cart_productId">
                    <b>ID:</b> 93813718293
                  </div>
                  <div className="cart_producColor"></div>
                  <div className="cart_productSize">
                    <b>Size:</b> M
                  </div>
                </div>
              </div>
              <div className="cart_priceDetail">
                <div className="cart_productAmountCont">
                  <Add />
                  <div className="cart_prductAmount">1</div>
                  <Remove />
                </div>
                <div className="cart_ProductPrice">$30</div>
              </div>
              {/* </div> product */}
            </div>
            <hr className="hr" />
            {/* second */}

            <div className="cart_product">
              <div className="cart_productDetail">
                <img
                  className="cart_img"
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                />
                <div className="cart_Details">
                  <div className="cart_productName">
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </div>
                  <div className="cart_productId">
                    <b>ID:</b> 93813718293
                  </div>
                  <div className="cart_producColor"></div>
                  <div className="cart_productSize">
                    <b>Size:</b> M
                  </div>
                </div>
              </div>
              <div className="cart_priceDetail">
                <div className="cart_productAmountCont">
                  <Add />
                  <div className="cart_prductAmount">1</div>
                  <Remove />
                </div>
                <div className="cart_ProductPrice">$30</div>
              </div>
              {/* </div> product */}
            </div>

            {/* second */}
            {/* </div> product */}
            {/* </div> info */}
          </div>
          {/* </div> info */}

          <div className="summary">
            <div className="summary_tittle">Order Summary</div>
            <div className="summary_item">
              <div className="summary_item_text">subtottal</div>
              <div className="summary_item_price">$80</div>
            </div>
            <div className="summary_item">
              <div className="summary_item_text">estimated shipping</div>
              <div className="summary_item_price">$ 5.90</div>
            </div>
            <div className="summary_item">
              <div className="summary_item_text">shipping discount</div>
              <div className="summary_item_price">$ -5.90</div>
            </div>
            <div className="summary_item" type="total">
              <div className="summary_item_text">Total</div>
              <div className="summary_item_price">$80</div>
            </div>
            <button className="summary_btn">check now</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
