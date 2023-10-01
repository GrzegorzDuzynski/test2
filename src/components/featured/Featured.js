import React from "react";

import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <h1 className="featured-title"> Top featured Listings</h1>
      <p className="text-featured">
        Selected listings by City, State & Zip based on views.
      </p>
      <div className="container-featured">
        <div className="box-img span-3 image-grid-row-2">
          <img
            src={
              "https://images.pexels.com/photos/226407/pexels-photo-226407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="hause"
          />
        </div>
        <div className="box-img">
          <img
            src={
              "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="bedroom"
          />
        </div>
        <div className="box-img">
          <img
            src={
              "https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="Saloon"
          />
        </div>
        <div className="box-img">
          <img
            src={
              "https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="kitchen"
          />
        </div>
        <div className="box-img">
          <img
            src={
              "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="bedroom"
          />
        </div>
        <div className="span-3 image-details">
          <div className="top">
            <h2>123 Acme st. Dallas, TX</h2>
            <p>House for Sale</p>
            <p className="price">$2,677,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="Bold-text">Bedrooms:6</p>
              </div>
              <div className="info">
                <p className="Bold-text">Bathrooms:3</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold"> Square feet:</p>
                <p>8,138</p>
              </div>
              <div className="info">
                <p className="bold"> Est Payment:</p>
                <p>$14,000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="span-2 right-img-details">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            corporis officiis nemo minus provident atque totam impedit error
            incidunt deleniti.
          </p>
          <button className="btn">View Listing</button>
        </div>
      </div>

      {/* second */}

      <div className="container-featured">
        <div className="box-img order-2">
          <img
            src={
              "https://images.pexels.com/photos/2134224/pexels-photo-2134224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="bathroom"
          />
        </div>
        <div className="box-img order-3">
          <img
            src={
              "https://images.pexels.com/photos/2343466/pexels-photo-2343466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="Saloon"
          />
        </div>

        <div className="box-img span-3 image-grid-row-2 order-1">
          <img
            src={
              "https://images.pexels.com/photos/2326926/pexels-photo-2326926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="hause"
          />
        </div>

        <div className="box-img order-4">
          <img
            src={
              "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="kitchen"
          />
        </div>
        <div className="box-img order-5">
          <img
            src={
              "https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="bedroom"
          />
        </div>
        <div className="span-2 right-img-details order-7">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            corporis officiis nemo minus provident atque totam impedit error
            incidunt deleniti.
          </p>
          <button className="btn">View Listing</button>
        </div>

        <div className="span-3 img-details order-6">
          <div className="top">
            <h2>456 Seatle st. Dallas, TX</h2>
            <p>House for Sale</p>
            <p className="price">$1,777,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="Bold-text">Bedrooms:5</p>
              </div>
              <div className="info">
                <p className="Bold-text">Bathrooms:3</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold"> Square feet:</p>
                <p>8,138</p>
              </div>
              <div className="info">
                <p className="bold"> Est Payment:</p>
                <p>$14,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
