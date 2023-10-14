import React from "react";
import "./catagories.css";
import CatagoriesItems from "./CatagoriesItems";
import { categories } from "../../data";
const Catagories = () => {
  return (
    <div className="container_Catagories">
      {categories.map((item) => (
        <CatagoriesItems key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Catagories;
