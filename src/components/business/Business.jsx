import React from "react";
import "../business/Business.css";

const Business = () => {
  let h4 = "Blog > Business";
  return (
    <div className="business">
      <div className="container">
        <div className="busines_contents">
          <h3>Business</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <h4>{h4}</h4>
        </div>
      </div>
    </div>
  );
};

export default Business;
