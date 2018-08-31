// class component -edux
import React, { Component } from 'react';
import PostCard from './PostCard';

class PostCardList extends Component {
  render() {
    return (
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
          <div className="card col-sm-4">
            <PostCard />
          </div>
          <div className="card col-sm-4">
            <PostCard />
          </div>
          <div className="card col-sm-4">
            <PostCard />
          </div>
        </div>
      </div>
    );
  }
}

export default PostCardList;
