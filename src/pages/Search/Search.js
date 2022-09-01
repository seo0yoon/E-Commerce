import React from "react";
import "./Search.scss";

const Search = () => {
  return (
    <div className="search">
      <div className="searchWrap">
        <div className="categoryWrap">
          <img src="/images/그룹 14.png" alt="" />
          <div className="categoryTxt">Shop by Category</div>
        </div>
        <div className="searchInput">
          <input type="text" />
        </div>
        <div className="userInfo">
          <img src="/images/그룹 16.png" alt="" />
          <select name="user" id="">
            <option value="1"></option>
            <option value="2"></option>
          </select>
          <img src="/images/Icon_cart.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Search;
