import React, { useState, useCallback } from 'react';

function CartList() {
  const [quantity, setQuantity] = useState(1);
  const [showList, setShowList] = useState(false);

  const isMinus = useCallback(() => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }, [quantity]);

  const isPlus = useCallback(() => {
    setQuantity(quantity + 1);
  }, [quantity]);

  const isShowList = useCallback(() => {
    if (showList == true) {
      setShowList(false);
      console.log(showList);
    } else {
      setShowList(true);
      console.log(showList);
    }
  }, [showList]);

  return (
    <li className="cart-list">
      <div className="list-info txt-bold">
        <div className="info">Product</div>
        <div className="info">Price</div>
        <div className="info">Quantity</div>
        <div className="info">Total</div>
      </div>
      <div className="info-main">
        <div className="info-product">
          <div className="product-img"></div>
          <div className="product-name txt-bold">Product name</div>
        </div>
        <div className="product-price txt-bold">$44.00</div>
        <div className="product-quantity">
          <div className="minus-quantity" onClick={isMinus}>
            <img src="/assets/cart/minus-icon.svg" alt="-" />
          </div>
          <input
            type="text"
            value={quantity}
            className="current-quantity"
            readOnly
          />
          <div className="plus-quantity" onClick={isPlus}>
            <img src="/assets/cart/plus-icon.svg" alt="+" />
          </div>
        </div>
        <div className="product-total txt-bold">$44.00</div>
      </div>
      <div className="list-bottom">
        <div className="coupon-block">
          <div className="select-coupon">
            <div className="coupon-txt" onClick={isShowList}>
              회원가입 축하 10% 쿠폰
            </div>
            <div className="select-icon">
              <img src="/assets/cart/select-icon.svg" alt="select-icon" />
            </div>
            <div
              className="hidden-coupons"
              style={`${showList}` ? { opacity: 0 } : { opacity: 1 }}
            >
              <div className="hidden-coupon">회원가입 축하 10% 쿠폰</div>
              <div className="hidden-coupon">회원가입 축하 10% 쿠폰</div>
            </div>
          </div>
          <div className="coupon-desc txt-bold">Apply coupon</div>
        </div>
        <div className="update-cart txt-bold">Update cart</div>
      </div>
    </li>
  );
}

export default CartList;
