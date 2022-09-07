import React from "react";
import "./Socials.scss";

const Socials = () => {
  return (
    <div className="socials">
      <div className="facebook-icon">
        <img src={process.env.PUBLIC_URL + "/assets/Footer/facebook-icon.svg"} alt="페이스북으로 가기" />
      </div>
      <div className="in-icon">
        <img src={process.env.PUBLIC_URL + "/assets/Footer/in-icon.svg"} alt="in?으로 가기" />
      </div>
      <div className="instagram-icon">
        <img src={process.env.PUBLIC_URL + "/assets/Footer/instagram-icon.svg"} alt="인스타그램으로 가기" />
      </div>
    </div>
  );
};

export default Socials;
