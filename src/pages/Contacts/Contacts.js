import React from "react";
import { Link } from "react-router-dom";
import "./Contacts.scss";

const Contacts = () => {
  return (
    <div className="notfound">
      <div className="wrapper">
        <div className="title">Preparing for service</div>
        <div className="context">We are preparing for better service. Hold on a minute, please.</div>
        <Link to={"/"}>
          <div className="back-btn">Back to Home</div>
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
