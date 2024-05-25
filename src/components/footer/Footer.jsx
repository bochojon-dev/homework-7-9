import Image from "next/image";
import React from "react";
import "../footer/Footer.css";
import icon1 from "@/assets/icon1.png";
import icon2 from "@/assets/icon2.png";
import icon3 from "@/assets/icon3.png";
import icon4 from "@/assets/icon4.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_contents">
          <div className="par">
            <p>Finstreet 118 2561 Fintown</p>
            <p>Hello@finsweet.com 020 7993 2905</p>
          </div>
          <div className="footer_icons">
            <Image src={icon1} alt="icon" />
            <Image src={icon2} alt="icon" />
            <Image src={icon3} alt="icon" />
            <Image src={icon4} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
