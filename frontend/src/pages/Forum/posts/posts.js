// class component
import React, { Component } from 'react';
import PostCardList from './PostCardList';
import SearchBar from './SearchBar';

class Posts extends Component {
  render() {
    return (
      <div>
        <div>
          <a className="btn btn-primary" href="/createPost">
            Create Post!
          </a>
        </div>
        <SearchBar />
        <div className="jumbotron" style={{ margin: 0, background: '#00B0AF' }}>
          {/* <div className="container"> */}
          <div>Posts Lists:</div>
          <PostCardList />
          {/* </div> */}
          <button
            className="btn btn-danger"
            style={{ marginLeft: 800, marginTop: 50 }}
          >
            Load more
          </button>
        </div>
      </div>
    );
  }
}

export default Posts;
