import React from "react";

const JournalInput = () => {
  return (
    <div className="journal-input">
      <input className="txt-bold" type="text" placeholder="Type here to search..." />
      <div className="search-icon">
        <img src="/images/journal/searchicon.png" alt="search-icon" />
      </div>
    </div>
  );
};

export default JournalInput;
