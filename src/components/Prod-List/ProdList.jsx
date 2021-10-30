import React from "react";
import Product from "../Product/Product";
import { ProductsData } from "../../Assets/Data";

import "./ProdList.css";

const ProdList = () => {
  return (
    <>
      <section className="product-list">
        <div className="product-text">
          <h1 className="product-title">Create & Inspire. It's Mateen</h1>
          <p className="product-description">
            Front End Developers typically work for corporations across
            industries as members of the IT department, but they also work for
            software companies and work as self-employed individuals. They work
            closely with other Web Developers and IT professionals to design and
            troubleshoot unique software and web applications.
          </p>
        </div>

        <div className="product-item">
          {ProductsData.map((item) => {
            return <Product key={item.id} imgSrc={item.img} url={item.url} />;
          })}
        </div>
      </section>
    </>
  );
};

export default ProdList;
