import Category from "@/components/category/Category";
import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";
import React from "react";

const Home_page = () => {
  return (
    <div className="Home">
      <Hero />
      <Products />
      <Category />
    </div>
  );
};

export default Home_page;
