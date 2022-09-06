import React from 'react';
import Category from './components/Category/Category';
import SearchInput from './components/SearchInput/SearchInput';
import Mypage from './components/Mypage/Mypage';
import './css/index.css';

function Search() {
  return (
    <div className="search">
      <div className="wrapper">
        <Category />
        <SearchInput />
        <Mypage />
      </div>
    </div>
  );
}

export default Search;
