import React from "react";
import Data from "../../Data/Hero";
import CustomButton from "../custom/CustomButton";

interface Props {}

const ProductSection = (props: Props) => {
  return (
    <div className="parent">
      {Data.map((data) => {
        return (
          <div className="item" key={data.id}>
            <img src={data.image} alt="" className="product-img" />
            <footer>
              <p className="product-name">name</p>
              <h4 className="product-price">$9.99</h4>
            </footer>
          </div>
        );
      })}
    </div>
  );
};

export default ProductSection;
