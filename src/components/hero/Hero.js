import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1 className="title">Find the perfect place</h1>
        <p className="search-text">
          Serach the largest selection of luxury high race apaortments, multi
          family homes, and luxury
        </p>
        <form className="search">
          <div>
            <input
              type="text"
              className="input-text"
              placeholder="enter Keyword.."
            />
          </div>
          <div className="radio">
            <input className="input-radio" type="radio" id="buy" checked />
            <label className="label" htmlFor="">
              Buy
            </label>
            <input className="input-radio" type="radio" id="rent" />
            <label className="label" htmlFor="">
              rent
            </label>
            <button className="button" type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
