import {
  Facebook,
  Pinterest,
  Instagram,
  Twitter,
  Room,
  Phone,
  MailOutline,
} from "@mui/icons-material";
import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_left">
        <div className="footer_logo">LAMA</div>
        <div className="footer_desc">
          There are many variations of passages of Lorem <br></br> Ipsum
          available, but the majority have suffered <br></br> alteration in some
          form, by injected humour <br></br> , or randomised words which don’t
          look even <br></br> slightly believable.
        </div>
        <div className="footer_socila_container">
          <div className="social_icon">
            <Facebook />
          </div>
          <div className="social_icon">
            <Instagram />
          </div>
          <div className="social_icon">
            <Twitter />
          </div>
          <div className="social_icon">
            <Pinterest />
          </div>
        </div>
      </div>

      {/* center */}
      <div className="footer_center">
        <h2 className="footer_tittle"> Useful Links</h2>
        <div className="list">
          <div className="list_item">Home</div>
          <div className="list_item">Cart</div>
          <div className="list_item">Man Fashion</div>
          <div className="list_item">Women Fashion</div>
          <div className="list_item">Accessories</div>
          <div className="list_item">My Account</div>
          <div className="list_item">Order Tracking </div>
          <div className="list_item">Whishlist</div>
          <div className="list_item">Whishlist</div>
          <div className="list_item">Terms</div>
        </div>
      </div>

      {/* right */}
      <div className="footer_right">
        <h2 className="footer_tittle">Contact</h2>
        <div className="contact_item">
          <Room />
          622 Dixie Path , South Tobinchester 98336
        </div>
        <div className="contact_item">
          <Phone />
          +1 234 56 78
        </div>
        <div className="contact_item">
          <MailOutline /> contact@lama.dev
        </div>

        <div>
          <img
            className="payment"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8DrDMPhTmy-31C5F1Lus1fqQFHQFm_t1VjQ&usqp=CAU"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
