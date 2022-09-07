import React from "react";
import "./Socials.scss";

const Socials = () => {
  return (
    <div className="socials">
      <div className="facebook-icon">
        <img src="/images/Footer/facebookicon.png" alt="페이스북으로 가기" />
      </div>
      <div className="in-icon">
        <img src="/images/Footer/inicon.png" alt="in?으로 가기" />
      </div>
      <div className="instagram-icon">
        <img src="/images/Footer/instagramicon.png" alt="인스타그램으로 가기" />
      </div>
    </div>
  );
};

export default Socials;
