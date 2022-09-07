import React from "react";
import { useState, useCallback } from "react";

const sale = (fl, dis) => {
  if (dis) {
    return (fl * (100 - dis)) / 100;
  } else {
    return fl;
  }
};

const Item = ({ item: { title, price, detail, event, percent } }) => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  return (
    <div className="item-contents" onMouseOver={() => setIsOptionOpen(true)} onMouseOut={() => setIsOptionOpen(false)}>
      <div className="content">
        {event ? (
          event === "New" ? (
            <div className="badge txt-bold">{event}</div>
          ) : (
            <div className="badge txt-bold">-{percent}%</div>
          )
        ) : undefined}

        <div className={`options ${isOptionOpen ? "open-option" : "close-option"}`}>
          <ul className="lists">
            <li className="list wish">
              <div className="context">Add to Wish List</div>
              <div className="icon">
                <img src={`${process.env.PUBLIC_URL}/assets/shop/heart-icon.svg`} alt="heart-icon" />
              </div>
            </li>
            <li className="list compare">
              <div className="context">Compare</div>
              <div className="icon">
                <img src={`${process.env.PUBLIC_URL}/assets/shop/compare-icon.svg`} alt="compare-icon" />
              </div>
            </li>
            <li className="list add-cart">
              <div className="context">Add to Cart</div>
              <div className="icon">
                <img src={`${process.env.PUBLIC_URL}/assets/shop/cart-icon.svg`} alt="cart-icon" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-context">
        <div className="bottom-title txt-bold">{title}</div>
        <div className="bottom-price">${sale(price, percent).toFixed(2)}</div>
      </div>
      <div className="bottom-detail">{detail}</div>
    </div>
  );
};

export default Item;
