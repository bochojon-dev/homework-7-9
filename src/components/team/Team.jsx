import Image from "next/image";
import "../team/Team.css";
import React from "react";
import image1 from "@/assets/team1.png";
import image2 from "@/assets/team2.png";

const Team = () => {
  return (
    <div className="container">
      <div className="team_contents">
        <div className="team_item">
          <div className="team_text">
            <h3>Our team of creatives</h3>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
          <Image alt="Img" src={image1} width={624} height={480} />
        </div>
        <div className="team_item">
          <div className="team_text">
            <h3>Why we started this Blog</h3>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
          <Image alt="Img" src={image2} width={624} height={480} />
        </div>
      </div>
    </div>
  );
};

export default Team;
