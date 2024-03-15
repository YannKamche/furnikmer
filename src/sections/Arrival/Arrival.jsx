import React, { useState } from "react";
import "./Arrival.css";
import { arrival } from "../../constants/constants";

const Arrival = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="big-furn" id="new-arrival">
      <div className="furn-title">
        <h2 className="text-3xl">
          {arrival.title} <br /> {arrival.title2}
        </h2>
        <p>{arrival.desc}</p>
      </div>

      <div className="big-part">
        <img src={arrival.img1} alt="" />
        <div className="text-inside">
          <img
            src={arrival.img2}
            alt=""
            className={`plus ${isActive ? "img_active" : ""}`}
            onClick={handleToggle}
          />
          <div className={`text-box ${isActive ? "active" : ""}`}>
            <div>
              <img src={arrival.img3} alt="" />
            </div>
            <div>
              <h5>{arrival.title3}</h5>
              <p>{arrival.desc2}</p>
              <div className="link">
                <a href="#">{arrival.link}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
