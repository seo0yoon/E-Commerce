import React from "react";
import "./Socials.scss";

const Socials = () => {
  return (
    <div className="socials">
      <div className="facebook-icon">
        <img src="/images/footer/facebookicon.png" alt="페이스북으로 가기" />
      </div>
      <div className="in-icon">
        <img src="/images/footer/inicon.png" alt="in?으로 가기" />
      </div>
      <div className="instagram-icon">
        <img src="/images/footer/instagramicon.png" alt="인스타그램으로 가기" />
      </div>
    </div>
  );
};

export default Socials;
