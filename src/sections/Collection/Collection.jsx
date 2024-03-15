import React from "react";
import { collection } from "../../constants/constants";
import "./Collection.css";

const Collection = () => {
  return (
    <div className="big-collection">
      <div className="collect-flex">
        {collection.map((item, index) => (
          <div className="collect" key={index}>
            <div className="image">
              <img src={item.img} alt="" />
            </div>
            <div className="link">
              <a href="#">{item.link}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
