import React from "react";

const LinkWrapper = () => {
  return (
    <div className="links-wrappers">
      <img src={require("../verizon.png")} />
      <div className="top-links-wrapper">
        <br />
        <a href className="wireless">
          Wireless
        </a>
        <a href className="inhome">
          In Home
        </a>
        <a href className="business">
          Business
        </a>

        <a href className="stores">
          Stores
        </a>
        <br />
        <br />
        <a href className="Phones">
          Phones
        </a>
        <a href className="Phones">
          Plans
        </a>
        <a href className="Phones">
          Deals
        </a>
        <a href className="Phones">
          Support
        </a>
        <a href className="Phones">
          5G
        </a>
        <a href className="Espanol">
          Espanol
        </a>
        <a href className="Signs">
          Sign In
        </a>
      </div>
      <div className="searchTextBoxTop">
        <input
          className="search"
          type="text"
          name="q"
          maxLength="100"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default LinkWrapper;
