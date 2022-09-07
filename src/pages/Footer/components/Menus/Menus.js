import React from "react";
import { Link } from "react-router-dom";

const Menus = ({ menus }) => {
  return (
    <div className="footer-menus">
      <ul className="menus">
        {menus.map((menus, idx) => {
          return (
            <li className="menu" key={idx}>
              <Link to={menus.path}>{menus.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menus;
