import React from "react";
import "./Button.scss";

const Button = ({ backgroundColor, color }) => {
  return (
    <div style={{ backgroundColor }} className="button">
      <div style={{ color }} className="buttonTxt">
        Shop Now
      </div>
    </div>
  );
};

export default Button;
