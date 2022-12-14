import React from "react";
import { Link } from "react-router-dom";

const Mypage = () => {
  return (
    <div className="my-page">
      <div className="my-menus">
        <Link to="/login">
          <div className="my-profile">
            <img src="/images/search/myprofileicon.png" alt="내 프로필" />
          </div>
        </Link>
        <Link to="/myaccount">
          <select className="my-settings">
            <option value="my-info"></option>
            <option value="my-info"></option>
            <option value="settings"></option>
          </select>
        </Link>
      </div>
      <Link to="/cart">
        <div className="my-shop">
          <img src="/images/search/myshopicon.png" alt="내 장바구니" />
        </div>
      </Link>
    </div>
  );
};

export default Mypage;
