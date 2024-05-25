import React from "react";
import "../search/Search.css";
import Image from "next/image";
import blog from "@/assets/blog.png";

const Search = () => {
  let bottom = `< Prev   1 2 ... 10   Next >`;
  return (
    <div className="search">
      <div className="container">
        <div className="search_contents">
          <form action="">
            <input type="search" placeholder="Searching ..." />
          </form>
          <div className="search_cards">
            <div className="search_card">
              <Image src={blog} alt="blog" />
              <div className="search_texts">
                <h4>BUSINESS</h4>
                <h3>Top 6 free website mockup tools 2022</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Non blandit massa enim nec.
                </p>
              </div>
            </div>
            <div className="search_card">
              <Image src={blog} alt="blog" />
              <div className="search_texts">
                <h4>BUSINESS</h4>
                <h3>Top 6 free website mockup tools 2022</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Non blandit massa enim nec.
                </p>
              </div>
            </div>
            <div className="search_card">
              <Image src={blog} alt="blog" />
              <div className="search_texts">
                <h4>BUSINESS</h4>
                <h3>Top 6 free website mockup tools 2022</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Non blandit massa enim nec.
                </p>
              </div>
            </div>
            <div className="search_card">
              <Image src={blog} alt="blog" />
              <div className="search_texts">
                <h4>BUSINESS</h4>
                <h3>Top 6 free website mockup tools 2022</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Non blandit massa enim nec.
                </p>
              </div>
            </div>
          </div>
          <h5>{bottom}</h5>
        </div>
      </div>
    </div>
  );
};

export default Search;
