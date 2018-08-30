// class component
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <div>
          SearchBar:
          <input type="text" placeholder="Enter keywords here..." />
          <button>Enter</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
