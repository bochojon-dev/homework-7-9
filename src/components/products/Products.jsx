import React from "react";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Products = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <h2>Products</h2>
    </div>
  );
};
export default Products;
