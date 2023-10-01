import React from "react";

import "./Best.scss";

const Best = () => {
  return (
    <div className="best">
      <h1 className="title">Find Best Rated Properties</h1>
      <div className="best-div">
        <p className="text">
          <span className="bold">All</span>
        </p>
        <p className="text">Commercial</p>
        <p className="text">Residential</p>
        <p className="text">Agricultural</p>
      </div>
      <div className="container-best">
        <div className="img-box">
          <img
            src={
              "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="flat"
          />
        </div>
        <div className="img-box">
          <img
            src={
              "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt="flat"
          />
        </div>
        <div className="img-box">
          <img
            src={
              "https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="flat"
          />
        </div>
      </div>
      <button className="btn">View All</button>
    </div>
  );
};

export default Best;
