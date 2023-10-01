import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <FontAwesomeIcon className="icon" icon={faFacebook} />
        <FontAwesomeIcon className="icon" icon={faTwitter} />
        <FontAwesomeIcon className="icon" icon={faInstagram} />
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
