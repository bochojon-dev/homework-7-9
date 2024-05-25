import Category from "@/components/category/Category";
import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";
import React from "react";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Home_page = async () => {
  const data = await getData();
  return (
    <div className="Home">
      <Hero />
      <Products data={data} />
      <Category />
    </div>
  );
};

export default Home_page;
