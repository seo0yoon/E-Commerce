import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={`${process.env.PUBLIC_URL}/assets/header/logo.svg`} alt="OBREBI" />
      </Link>
    </div>
  );
};

export default Logo;
