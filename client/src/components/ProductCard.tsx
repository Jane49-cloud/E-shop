import React from "react";

interface Product {
  name: string;
  price: number;
  image: string;
}

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="product-card">
      <img src="image" alt="" className="product-image" />
      <h3 className="product-name">name</h3>
      <p className="product-price">${(200.0).toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
