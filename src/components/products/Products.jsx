"use client";
import React from "react";

const Products = ({ data }) => {
  console.log(data?.products);
  return (
    <div>
      <h2>Products</h2>
    </div>
  );
};
export default Products;
