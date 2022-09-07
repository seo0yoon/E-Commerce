import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src="/images/header/logo.png" alt="OBREBI" />
      </Link>
    </div>
  );
};

export default Logo;
