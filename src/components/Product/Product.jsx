import React from "react";

import "./Product.css";

const Product = ({ imgSrc, url }) => {
  return (
    <>
      <div className="product">
        <div className="product-brows">
          <div className="brows-circle c1" />
          <div className="brows-circle c2" />
          <div className="brows-circle c3" />
        </div>

        <a href={url} target="_blank" rel="noreferrer">
          <figure>
            <img src={imgSrc} alt="Product" className="product-img" />
          </figure>
        </a>
      </div>
    </>
  );
};

export default Product;
