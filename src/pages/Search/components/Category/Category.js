import React from "react";

const Category = () => {
  return (
    <div className="category">
      <div className="category-icon">
        <img src={`${process.env.PUBLIC_URL}/assets/search/category_menu-icon.svg`} alt="카테고리로 이동" />
      </div>
      <div className="context">Shop by Category</div>
    </div>
  );
};

export default Category;
