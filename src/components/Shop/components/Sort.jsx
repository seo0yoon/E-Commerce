import React from 'react';

function Sort() {
  return (
    <div className="sort">
      <div className="sort-style">
        <div>
          <img src="/assets/shop/sort1.svg" alt="크게 보기" />
        </div>
        <div>
          <img src="/assets/shop/sort2.svg" alt="작게 보기" />
        </div>
      </div>
      <div className="selection">
        <div className="sort-by">
          <div className="context">Sort by:</div>
          <div className="selection-box big-size">
            <div className="kinds">Featured</div>
            <div className="icon">
              <img src="/assets/shop/selection-icon.svg" alt="종류 보기" />
            </div>
          </div>
        </div>
        <div className="sort-by">
          <div className="context">Show:</div>
          <div className="selection-box small-size">
            <div className="kinds txt-bold">36</div>
            <div className="icon">
              <img src="/assets/shop/selection-icon.svg" alt="종류 보기" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sort;
