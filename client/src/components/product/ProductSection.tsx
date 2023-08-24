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
            <img src={data.image} alt="" />
            <p>price: ksh 20</p>
            <CustomButton>Add to cart</CustomButton>
          </div>
        );
      })}
    </div>
  );
};

export default ProductSection;
