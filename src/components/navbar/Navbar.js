import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBars,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="navbar">
      <div className="container-nav">
        <h1>
          <span className="span">
            <FontAwesomeIcon icon={faHouse} />
            Real
          </span>
          Estate
        </h1>
        <button className="btn">Sign in</button>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="li">
            <a className="a" href="#">
              Home
            </a>
          </li>
          <li className="li">
            <a className="a" href="#">
              Search
            </a>
          </li>
          <li className="li">
            <a className="a" href="#">
              About
            </a>
          </li>
          <li className="li">
            <a className="a" href="#">
              Contact
            </a>
          </li>
        </ul>
        <div className="hamburger" onClick={() => setClick(!click)}>
          {click ? (
            <FontAwesomeIcon className="icon" icon={faCircleXmark} />
          ) : (
            <FontAwesomeIcon className="icon" icon={faBars} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
