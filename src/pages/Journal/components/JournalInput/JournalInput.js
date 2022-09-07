import React from "react";

const JournalInput = () => {
  return (
    <div className="journal-input">
      <input className="txt-bold" type="text" placeholder="Type here to search..." />
      <div className="search-icon">
        <img src={`${process.env.PUBLIC_URL}/assets/journal/search-icon.svg`} alt="search-icon" />
      </div>
    </div>
  );
};

export default JournalInput;
