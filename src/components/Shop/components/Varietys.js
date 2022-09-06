import React from 'react';
import Variety from './components/Variety';

function Varietys({ settings: { title, icon, alt, contents } }) {
  return (
    <div className="varietys">
      <div className="title txt-bold">
        <div className="context">{title}</div>
        <div className="icon">
          <img src={`${icon}`} alt={`${alt}`} />
        </div>
      </div>

      {contents.map((contents, idx) => {
        return <Variety contents={contents} key={idx} />;
      })}
    </div>
  );
}

export default Varietys;
