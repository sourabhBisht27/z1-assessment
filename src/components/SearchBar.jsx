import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim()) {
      onSearch(term);
    }
  };

  return (
    <form
      className="search-container"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search for a movie..."
        className="search-input"
      />
      <button
        type="submit"
        className="search-button"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
