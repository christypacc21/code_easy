// func component ?
import React from 'react';

const PostCard = () => {
  return (
    <div>
      <div className="card-body">
        <p className="card-text">Post 1 User propic</p>
        <p className="card-text">Post 1 Username</p>
        <p className="card-text">Post 1 DateTime</p>
        <h5 className="card-title">Post 1 Title</h5>
        <p className="card-text">
          Post 1 Content (limited to 100words to show here?)
        </p>
        <p className="card-text">Post 1 Image (or file) (if any)</p>
        <p>(no. of comments)</p>
        <a className="btn btn-primary" href="/postDetails">
          Press into Post 1 details
        </a>
      </div>
    </div>
  );
};

export default PostCard;
