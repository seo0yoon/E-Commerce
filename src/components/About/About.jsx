import React from 'react';
import Content from './components/Content/Content';
import { useSelector } from 'react-redux';
import './css/index.css';

function About() {
  const btnName = useSelector((state) => state.layouts.btn);
  return (
    <div className="about">
      <div className="wrapper">
        <div className="block">
          <div className="title txt-bold">About</div>
          <div className="path">Home &gt; About</div>
        </div>
        <div className="contents">
          {btnName.map((btnName, idx) => {
            return <Content btnName={btnName} key={idx} />;
          })}
        </div>
        <div className="intro txt-bold">
          Orebi is one of the world’s leading ecommerce brands and is
          internationally recognized for celebrating the essence of classic
          Worldwide cool looking style.
        </div>
        <div className="explains">
          <div className="explain txt-bold">
            <div className="title">Our Vision</div>
            <div className="context">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div className="explain">
            <div className="title txt-bold">Our Story</div>
            <div className="context">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic.
            </div>
          </div>
          <div className="explain">
            <div className="title txt-bold">Our Brands</div>
            <div className="context">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
