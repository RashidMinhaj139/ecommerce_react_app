import React from "react";
import "./navbar.css";
import { Badge } from "@mui/material";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <div className="language">
            <span>EN</span>
          </div>
          <div className="search_container">
            <input className="search_container_input" placeholder="search..." />
            <Search className="search_icon" />
          </div>
          <div></div>
        </div>
        <div className="center">LAMA</div>
        <div className="right">
          <div className="menu_item">Register</div>
          <div className="menu_item">Sign Up</div>
          <div className="menu_item">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
