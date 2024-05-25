"use client";
import Image from "next/image";
import React from "react";
import "../products/Products.css";

const Products = ({ data }) => {
  const product = data?.products?.map((e) => (
    <div key={e.id} className="product_card">
      <Image src={e.images[0]} alt={e.title} width={405} height={318} />
      <h4>
        By <span>John Doe</span> | Aug28, 2021
      </h4>
      <h3>{e.title} </h3>
      <p>{e.description} </p>
    </div>
  ));
  return (
    <div className="container">
      <div className="produc_contents">
        <h2>Products</h2>
        <div className="product_cards">{product}</div>
      </div>
    </div>
  );
};
export default Products;
