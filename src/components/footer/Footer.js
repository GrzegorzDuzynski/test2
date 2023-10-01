import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
        <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
        <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
      </div>
      <div className="container-footer">
        <div className="col">
          <h3 className="title">About</h3>
          <p className="text">Company</p>
          <p className="text">Details</p>
          <p className="text">Planning</p>
          <p className="text">About Us</p>
        </div>
        <div className="col">
          <h3 className="title">Company</h3>
          <p className="text">Company</p>
          <p className="text">Details</p>
          <p className="text">Planning</p>
          <p className="text">About Us</p>
        </div>
        <div className="col">
          <h3 className="title">Legal</h3>
          <p className="text">Company</p>
          <p className="text">Details</p>
          <p className="text">Planning</p>
          <p className="text">About Us</p>
        </div>
        <div className="col">
          <h3 className="title">Conact</h3>
          <p className="text">Company</p>
          <p className="text">Details</p>
          <p className="text">Planning</p>
          <p className="text">About Us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
