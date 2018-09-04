// func component
import React from 'react';

const PostCard = ({
  postId,
  propicPath,
  username,
  dateTime,
  postTitle,
  postContent,
  postImagePath
  // count
}) => {
  return (
    <div>
      <div className="card-body">
        <p className="card-text">
          PostID:
          {postId + 1}
        </p>
        <img alt="User propic" src={propicPath} />
        <p className="card-text">
          {username}
          {dateTime}
        </p>
        <h5 className="card-title">{postTitle}</h5>
        <p className="card-text">
          {postContent}
          (limited to 100words to show here?)
        </p>
        <img alt="Post file" src={postImagePath} />
        {/* <p>(No. of comments): {count}</p> */}
        {/* <a className="btn btn-primary" href="/postDetails"> */}
        <a className="btn btn-primary" href="/api/forum/posts/">
          Press into Post Details
        </a>
      </div>
    </div>
  );
};

export default PostCard;
