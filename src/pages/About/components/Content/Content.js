import React from 'react';

function Content({ btnName }) {
  return (
    <div className="content">
      <div className="btn">{btnName.title}</div>
    </div>
  );
}

export default Content;
