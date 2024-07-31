
import React from 'react';
import './Searchbar.css'; // Import CSS for styling

const SearchBar = ({ query, onChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search tasks..."
      />
    </div>
  );
};

export default SearchBar;
