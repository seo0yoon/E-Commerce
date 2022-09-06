import React from 'react';

function Category() {
  return (
    <div className="category">
      <div className="category-icon">
        <img
          src="/assets/search/category_menu-icon.svg"
          alt="카테고리로 이동"
        />
      </div>
      <div className="context">Shop by Category</div>
    </div>
  );
}

export default Category;
