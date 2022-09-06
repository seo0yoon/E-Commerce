import React from 'react';

function JournalCard({ categories, title, desc }) {
  return (
    <article className="card">
      <div className="card-img"></div>
      <div className="desc">
        <div className="category">{categories}</div>
        <div className="title txt-bold">{title}</div>
        <div className="subtitle">{desc}</div>
      </div>
    </article>
  );
}

export default JournalCard;
