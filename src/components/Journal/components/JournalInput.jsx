import React from 'react';

function JournalInput() {
  return (
    <div className="journal-input">
      <input
        className="txt-bold"
        type="text"
        placeholder="Type here to search..."
      />
      <div className="search-icon">
        <img src="/assets/journal/search-icon.svg" alt="search-icon" />
      </div>
    </div>
  );
}

export default JournalInput;
