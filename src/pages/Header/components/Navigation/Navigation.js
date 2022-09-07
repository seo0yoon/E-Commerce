import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ menus }) => {
  return (
    <ul className="menus">
      {menus.map(({ id, title, path }) => {
        return (
          <li className="menu" key={id}>
            <Link to={path}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
