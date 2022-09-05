import React from "react";
import "./Sale.scss";

const Sale = () => {
  return (
    <div className="sale">
      <div className="title txt-bold"></div>
      <div className="context">
        Up to <p className="percents txt-bold"></p> sale for all
      </div>
      <div className="shop-btn">Shop Now</div>
    </div>
  );
};

export default Sale;
