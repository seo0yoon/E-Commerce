import React from 'react';

function Sale({ sales: { title, percents, context } }) {
  return (
    <div className="sale">
      <div className="title txt-bold">{title}</div>
      <div className="context">
        Up to <p className="percents txt-bold">{percents}</p> sale for all
        {context}
      </div>
      <div className="shop-btn">Shop Now</div>
    </div>
  );
}

export default Sale;
