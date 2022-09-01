import React from "react";
import "./Search.scss";

const Search = () => {
  return (
    <div className="search">
      <div className="searchWrap">
        <div className="categoryWrap">
          <img className="categoryIcon" src="/images/그룹 14.png" alt="category" />
          <div className="categoryTxt">Shop by Category</div>
        </div>
        <div className="inputWrap">
          <div className="inputBox">
            <input type="text" />
            <img className="searchIcon" src="/images/그룹 15.png" alt="search" />
          </div>
        </div>
        <div className="userInfo">
          <img className="userIcon" src="/images/그룹 16.png" alt="user" />
          <select className="select" name="user" id="">
            <option value="1"></option>
            <option value="2"></option>
          </select>
          <img className="cartIcon" src="/images/Icon_cart.png" alt="cart" />
        </div>
      </div>
    </div>
  );
};

export default Search;
