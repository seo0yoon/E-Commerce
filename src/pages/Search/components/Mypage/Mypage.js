import React from 'react';
import { Link } from 'react-router-dom';

function Mypage() {
  return (
    <div className="mypage">
      <div className="mymenus">
        <Link to="/login">
          <div className="myprofile">
            <img src="/assets/Search/myprofile-icon.svg" alt="내 프로필" />
          </div>
        </Link>
        <Link to="/myaccount">
          <div className="mysettings">
            <img src="/assets/Search/mysettings-icon.svg" alt="내 설정" />
          </div>
        </Link>
      </div>
      <Link to="/cart">
        <div className="myshop">
          <img src="/assets/Search/myshop-icon.svg" alt="내 장바구니" />
        </div>
      </Link>
    </div>
  );
}

export default Mypage;
