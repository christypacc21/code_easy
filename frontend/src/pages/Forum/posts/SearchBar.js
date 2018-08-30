// class component
// searchbar not yet done
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          value={this.state.posts}
          placeholder="Enter search keywords here..."
          onChange={event => this.onInputChange(event.target.value)}
        />
        <button>Enter</button>
      </div>
    );
  }
  onInputChange(posts) {
    this.setState({ posts });
    this.props.onSearchTermChange(posts);
  }
}

export default SearchBar;
