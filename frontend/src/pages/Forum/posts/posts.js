// class component
import React, { Component } from 'react';
import PostCard from './PostCard';
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
          <div className="container">
            <div className="row">
              <div>Posts Lists</div>
            </div>

            <div className="PostCardList">
              <div className="row">
                <div className="card col-sm-4">
                  <PostCard />
                </div>
                <div className="card col-sm-4">
                  <PostCard />
                </div>
                <div className="card col-sm-4">
                  <PostCard />
                </div>
                <PostCardList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
