// class component
import React from 'react';
import PostCard from './PostCard';

const PostCardList = () => {
  return (
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
  );
};

export default PostCardList;
