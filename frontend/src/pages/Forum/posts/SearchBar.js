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
      <div
        className="jumbotron postDetails card col-sm-12"
        style={{ margin: 0, background: '#D3D3D3' }}
      >
        <div className="search-bar input-group mb-3">
          <input
            type="text"
            class="form-control"
            value={this.state.posts}
            placeholder="Enter keywords here..."
            onChange={event => this.onInputChange(event.target.value)}
          />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">
              Enter to filter
            </button>
          </div>
        </div>
      </div>
    );
  }
  onInputChange(posts) {
    this.setState({ posts });
    this.props.onSearchTermChange(posts);
  }
}

export default SearchBar;
