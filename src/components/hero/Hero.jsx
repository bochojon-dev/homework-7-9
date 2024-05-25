import React from "react";
import "../hero/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero_contents">
          <div className="hero_texts">
            <h4>
              Posted on <span>STARTUP</span>
            </h4>
            <h3>Step-by-step guide to choosing great font pairs</h3>
            <p>
              By <span>James West</span> | May 23, 2022{" "}
            </p>
            <p className="duis">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
