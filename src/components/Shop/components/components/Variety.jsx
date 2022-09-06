import React from 'react';

function Variety({ contents: { context, btn, alt, color, color_display } }) {
  return (
    <div className="item">
      <div className="content">
        <div
          className="color"
          style={{ backgroundColor: `${color}`, display: `${color_display}` }}
        ></div>
        <div className="context">{context}</div>
      </div>
      <div className="plus-icon">
        <img src={`${btn}`} alt={`${alt}`} />
      </div>
    </div>
  );
}

export default Variety;
