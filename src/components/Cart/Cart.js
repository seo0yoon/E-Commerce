import React from 'react';
import CartList from './components/CartList';
import './css/index.css';

function Cart() {
  return (
    <div className="cart">
      <div className="wrapper">
        <div className="top">
          <div className="title txt-bold">Cart</div>
          <div className="bread-crumbs">Home &gt; Cart</div>
        </div>
        <ul className="cart-lists">
          <CartList />
        </ul>
        <div className="price-block">
          <div className="title txt-bold">Cart totals</div>
          <div className="subtotal">
            <div className="price-context">Subtotal</div>
            <div className="price txt-bold">389.99 $</div>
          </div>
          <div className="total">
            <div className="price-context">Total</div>
            <div className="price txt-bold">389.99 $</div>
          </div>
          <div className="check-out txt-bold">Proceed to Checkout</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
