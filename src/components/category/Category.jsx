import React from "react";
import "../category/Category.css";
import category1 from "@/assets/category1.png";
import category3 from "@/assets/category3.png";
import category4 from "@/assets/category4.png";
import icon from "@/assets/icon.png";
import Image from "next/image";

const Category = () => {
  return (
    <div className="container">
      <div className="category_contents">
        <h3>Choose A Category</h3>
        <div className="category_items">
          <div className="category_item">
            <Image alt="category" src={category1} />
            <h3>Business</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <div className="category_item">
            <div className="startup">
              <Image alt="category" className="startup_icon" src={icon} />
            </div>
            <h3>Startup</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <div className="category_item">
            <Image alt="category" src={category3} />
            <h3>Economy</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <div className="category_item">
            <Image alt="category" src={category4} />
            <h3>Technology</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
