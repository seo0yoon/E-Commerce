import React, { useState, useCallback } from 'react';

function PageMoving() {
  const pageNum = [1, 2, 3, 4];

  const [isOnPage, setIsOnPage] = useState(false);
  const [isOutPage, setIsOutPage] = useState(true);

  const openPage = useCallback(() => {
    setIsOnPage(true);
    setIsOutPage(false);
    console.log(isOnPage);
  }, []);

  const closePage = useCallback(() => {
    setIsOnPage(false);
    setIsOutPage(true);
  }, []);

  return (
    <nav className="nav">
      <ul className="moving-pages">
        {pageNum.map((pageNum, idx) => {
          return (
            <li
              onClick={openPage}
              key={idx}
              className={`moving-page ${isOnPage ? 'open-page' : 'close-page'}`}
            >
              {pageNum}
            </li>
          );
        })}
        <div className="more">
          <img src="/assets/shop/more-icon.svg" alt="..." />
        </div>
        <div className="moving-page">10</div>
      </ul>
      <div className="page-info txt-bold">Products from 1 to 12 of 80</div>
    </nav>
  );
}

export default PageMoving;
