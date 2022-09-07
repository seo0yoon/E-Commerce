import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="wrapper">
        <div className="title">404</div>
        <div className="context">
          The page you were looking for couldn't be found. The page could be removed or you misspelled the word while
          searching for it. Maybe try a search?
        </div>
        <Link to={"/"}>
          <div className="back-btn">Back to Home</div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
