import React from "react";

const SearchInput = () => {
  return (
    <div className="search-input">
      <input type="text" placeholder="Search Products" />
      <div className="search-icon">
        <img src="/images/search/inputsearchicon.png" alt="검색하기" />
      </div>
    </div>
  );
};

export default SearchInput;
