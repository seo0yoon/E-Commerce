import React from "react";
import "./Socials.scss";

const Socials = () => {
  return (
    <div className="socials">
      <div className="facebook-icon">
        <img src="/assets/Footer/facebookicon.svg" alt="페이스북으로 가기" />
      </div>
      <div className="in-icon">
        <img src="/assets/Footer/inicon.svg" alt="in?으로 가기" />
      </div>
      <div className="instagram-icon">
        <img src="/assets/Footer/instagramicon.svg" alt="인스타그램으로 가기" />
      </div>
    </div>
  );
};

export default Socials;
