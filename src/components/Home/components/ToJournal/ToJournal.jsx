import React from 'react';
import { Link } from 'react-router-dom';

function ToJournal({ link }) {
  return (
    <Link to={link.path}>
      <div className="block">
        <div className="content"></div>
        <div className="category">Category</div>
        <div className="title txt-bold">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <div className="context">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </Link>
  );
}

export default ToJournal;
