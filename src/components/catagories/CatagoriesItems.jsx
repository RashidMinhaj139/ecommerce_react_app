import React from "react";
import "./catagories.css";
const CatagoriesItems = ({ item }) => {
  return (
    <div className="container_Catagoriesitem">
      <img className="cata_image" src={item.img} />
      <div className="cata_info">
        <h2 className="title">{item.title}</h2>
        <button className="btn">Shop Now</button>
      </div>
    </div>
  );
};

export default CatagoriesItems;
