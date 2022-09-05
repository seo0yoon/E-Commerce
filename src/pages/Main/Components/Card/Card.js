import React from "react";

const Card = () => {
  return (
    <li className="newBoxWrap">
      <li className="newBox">
        <img src="../../../public/images/Icon_cart.png" alt="" />
        <div className="newBtn">
          <div>New</div>
        </div>
        <ul className="inner">
          <li>
            Add to Wish List
            <img src="/images/그룹 42.png" alt="heart" />
          </li>
          <li>
            Compare
            <img src="/images/그룹 43.png" alt="compare" />
          </li>
          <li>
            Add to Cart
            <img src="/images/그룹 44.png" alt="cart" />
          </li>
        </ul>
      </li>

      <div className="newProductTxt">
        <div className="newProductFlex">
          <div className="newProductName">Basic Crew Neck Tee</div>
          <div className="basicFont">$44.00</div>
        </div>
        <div className="newProductColor basicFont">Black</div>
      </div>
    </li>
  );
};

export default Card;
