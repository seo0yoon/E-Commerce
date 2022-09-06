import React, { useState, useCallback, useEffect } from 'react';
import Description from './components/Description';
import Reviews from './components/Reviews';
import './css/index.css';
import { useSelector, useDispatch } from 'react-redux';
import { __UPDATE_PROD_DETAIL__ } from './actionTypes/layouts';
import ColorChip from './components/ColorChip';

function ShopInside() {
  const dispatch = useDispatch();
  const [isSelectColor, setIsSelectColor] = useState(false);
  const [isDisplayInput, setIsDisplayInput] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [numReview, setNumReivew] = useState(1);

  const [displayIdx, setDisplayIdx] = useState('desc');

  const prod_data = useSelector((state) => state.layouts.productDetail);

  const isMinus = useCallback(() => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }, [quantity]);

  const isPlus = useCallback(() => {
    setQuantity(quantity + 1);
  }, [quantity]);

  const selectColor = useCallback(() => {
    setIsSelectColor(true);
  }, []);

  const displayInput = useCallback(() => {
    setIsDisplayInput(true);
  }, []);

  useEffect(() => {
    const prod_num = '1439284';
    // 로딩을 걸꺼임
    // 네트워크 통신을 통해서, prod_num를 주고 데이터를 받아올꺼임.
    // 로딩 해제
    const prod_data = {
      product: {
        name: 'Product',
        price: 88,
        colors: [
          {
            isActive: false,
            value: '#c4c4c4',
          },
          {
            isActive: false,
            value: '#ff8686',
          },
          {
            isActive: false,
            value: '#7ed321',
          },
          {
            isActive: false,
            value: '#b6b6b6',
          },
          {
            isActive: false,
            value: '#15cba5',
          },
        ],
        size: ['XS', 'S', 'M'],
      },
      config: {
        discount: 50, //%,
        options: ['colors', 'size'],
        status: 'Sold Out',
      },
      features: {},
      details: {},
      refund: {},
      reviews: {},
      timestamp: 0,
    };
    // 제품을 리덕스로 업데이트
    dispatch({
      type: __UPDATE_PROD_DETAIL__,
      payload: prod_data,
    });

    // 데이터를 상세에 뿌려줄꺼임

    return () => {};
  }, [dispatch]);

  return (
    <div className="shop-inside">
      {prod_data ? (
        <div className="wrapper">
          <div className="top">
            <div className="title txt-bold">Products</div>
            <div className="bread-crumbs">Home &gt; Journal</div>
          </div>
          <div className="item-imges">
            <div className="item-img"></div>
            <div className="item-img"></div>
            <div className="item-img"></div>
            <div className="item-img"></div>
          </div>
          <div className="product-option">
            <div className="title txt-bold">Product</div>
            <div className="review-block">
              <div className="review-stars">
                <img src="/assets/shop/star-icon.svg" alt="🌟" />
                <img src="/assets/shop/star-icon.svg" alt="🌟" />
                <img src="/assets/shop/star-icon.svg" alt="🌟" />
                <img src="/assets/shop/star-icon.svg" alt="🌟" />
                <img src="/assets/shop/star-icon.svg" alt="🌟" />
              </div>
              <div className="review-txt">1 Review</div>
            </div>
            <div className="price">
              <div className="showing-price">
                <div className="full-price">$88.00</div>
                <div className="sale-price txt-bold">$44.00</div>
              </div>
              <div className="underline"></div>
            </div>
            <div className="select-option">
              <div className="select-color">
                <div className="title txt-bold">COLOR:</div>
                <ul className="colors">
                  {prod_data.product.colors.map((item, idx) => {
                    return <ColorChip key={idx} {...item} idx={idx} />;
                  })}
                </ul>
              </div>
              <div className="select-size">
                <div className="title txt-bold">SIZE:</div>
                <div className="size-input">
                  <div className="size-info">S</div>
                  <div className="input-icon">
                    <img src="/assets/shop/input-icon.svg" alt="input-icon" />
                  </div>
                  <div
                    className={`hidden-size ${isDisplayInput ? '' : 'hidden'}`}
                  >
                    M
                  </div>
                </div>
              </div>
              <div className="select-quantity">
                <div className="title txt-bold">QUANTITY:</div>
                <div className="product-quantity">
                  <div className="minus-quantity" onClick={isMinus}>
                    <img src="/assets/shop/minus-icon.svg" alt="-" />
                  </div>
                  <input
                    type="text"
                    value={quantity}
                    className="current-quantity"
                    readOnly
                  />
                  <div className="plus-quantity" onClick={isPlus}>
                    <img src="/assets/shop/plus-icon.svg" alt="+" />
                  </div>
                </div>
              </div>
              <div className="underline"></div>
              <div className="status-block">
                <div className="title txt-bold">STATUS:</div>
                <div className="current-status">{prod_data.config.status}</div>
              </div>
              <div className="underline"></div>
              <div className="buttons">
                <div className="add-wishlist txt-bold">Add to Wish List</div>
                <div className="add-cart txt-bold">Add to Cart</div>
              </div>
              <div className="underline"></div>
              <div className="more-desc">
                <div className="desc-block">
                  <div className="context txt-bold">FEATURE & DETAILS</div>
                  <div className="more-icon">
                    <img src="/assets/shop/more-plus-icon.svg" alt="+" />
                  </div>
                </div>
                <div className="underline"></div>
                <div className="desc-block">
                  <div className="context txt-bold">SHIPPING & RETURNS</div>
                  <div className="more-icon">
                    <img src="/assets/shop/more-plus-icon.svg" alt="+" />
                  </div>
                </div>
                <div className="underline"></div>
                <div className="detail-context">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div className="select-contents">
                <div
                  className={`description ${
                    displayIdx === 'desc' ? 'selected' : 'non-selected'
                  }`}
                  onClick={() => setDisplayIdx('desc')}
                >
                  Description
                </div>
                <div
                  className={`review ${
                    displayIdx === 'reviews' ? 'selected' : 'non-selected'
                  }`}
                  onClick={() => setDisplayIdx('reviews')}
                >
                  Reviews ({numReview})
                </div>
              </div>
              {displayIdx === 'desc' && <Description />}
              {displayIdx === 'reviews' && <Reviews />}
            </div>
            <ul className="input-boxes">
              <li className="input-box">
                <div className="title txt-bold">Name</div>
                <input type="text" placeholder="Your name here" />
              </li>
              <li className="input-box">
                <div className="title txt-bold">Email</div>
                <input type="text" placeholder="Your email here" />
              </li>
              <li className="input-box">
                <div className="title txt-bold">Review</div>
                <input type="text" placeholder="Your review here" />
              </li>
            </ul>
            <div className="post-btn txt-bold">POST</div>
          </div>
        </div>
      ) : undefined}
    </div>
  );
}

export default ShopInside;
