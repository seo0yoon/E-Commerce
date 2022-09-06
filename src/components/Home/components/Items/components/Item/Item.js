import React, { useState, useCallback } from 'react';

function sale(fl, dis) {
  if (dis) {
    return (fl * (100 - dis)) / 100;
  } else {
    return fl;
  }
}

function Item({ item: { title, price, detail, event, percent } }) {
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  return (
    <div
      className="contents"
      onMouseOver={() => setIsOptionOpen(true)}
      onMouseOut={() => setIsOptionOpen(false)}
    >
      <div className="content">
        {event ? (
          event === 'New' ? (
            <div className="badge txt-bold">{event}</div>
          ) : (
            <div className="badge txt-bold">-{percent}%</div>
          )
        ) : undefined}

        <div
          className={`options ${isOptionOpen ? 'open-option' : 'close-option'}`}
        >
          <ul className="lists">
            <li className="wish-list">
              <div className="context">Add to Wish List</div>
              <div className="icon">
                <img src="/assets/shop/heart-icon.svg" alt="heart-icon" />
              </div>
            </li>
            <li className="compare">
              <div className="context">Compare</div>
              <div className="icon">
                <img src="/assets/shop/compare-icon.svg" alt="compare-icon" />
              </div>
            </li>
            <li className="add-cart">
              <div className="context">Add to Cart</div>
              <div className="icon">
                <img src="/assets/shop/cart-icon.svg" alt="cart-icon" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="context">
        <div className="title txt-bold">{title}</div>
        <div className="price">${sale(price, percent).toFixed(2)}</div>
      </div>
      <div className="detail">{detail}</div>
    </div>
  );
}

export default Item;
