import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <header className="nav">
      <div className="navWrap">
        <div className="navLogo">
          <img src="/images/Logo.svg" alt="logo" />
        </div>
        <ul className="navMenu">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contacts</li>
          <li>Journal</li>
        </ul>
        <ul className="navLang">
          <li>EN</li>
          <li>RU</li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
