import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ menus }) {
  return (
    <ul className="menus">
      {menus.map((menus, idx) => {
        return (
          <li className="menu" key={idx}>
            <Link to={menus.path}>{menus.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Navigation;
