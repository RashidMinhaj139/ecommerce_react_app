import React from "react";
import { Send } from "@mui/icons-material";
import "./newsletter.css";
const Newsletter = () => {
  return (
    <div className="news_container">
      <div>
        <h1 className="news_title">Newsletter</h1>
      </div>
      <div>
        <h3 className="news_desc">
          Get timely updates from your favorite products.
        </h3>
      </div>
      <div className="news_input">
        <input type="text" placeholder="Enter your email" 
    
        />
        <button className="news_btn">
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
