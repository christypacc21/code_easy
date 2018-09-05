// func component
import React from 'react';
import { Link } from 'react-router-dom';
const PostCard = ({
  // key,
  postId,
  propicPath,
  username,
  dateTime,
  postTitle,
  postContent,
  postImagePath
  // count
}) => {
  // const postImagePath = `"${postImage}"`
  if (postContent.length > 50) {
    postContent = 'Too many words, press in to read more detials';
  }
  return (
    // <div id={key}>
    <div>
      <div className="card-body">
        <p className="card-text">
          PostID:
          {postId}
        </p>
        {!propicPath ? (
          <p>[[[This user has no pro pic]]]</p>
        ) : (
          <div>
            <img
              className="card"
              style={{ maxHeight: '10em' }}
              alt="(Failed to show Post file )"
              src={`${process.env.REACT_APP_API_SERVER}/${propicPath}`}
            />
          </div>
        )}
        <p className="card-text">Created by: {username}</p>
        <p className="card-text">{dateTime}</p>
        <h5 className="card-title">Title: {postTitle}</h5>
        <p className="card-text">
          Content: {postContent}
          {/* (limited to 100words to show here?) */}
        </p>
        {!postImagePath ? (
          <p>[[[This post has no image]]]</p>
        ) : (
          <div>
            <img
              className="card"
              style={{ maxHeight: '10em' }}
              alt="(Failed to show Post file )"
              src={`${process.env.REACT_APP_API_SERVER}/${postImagePath}`}
            />
          </div>
        )}
        {/* <p>(No. of comments): {count}</p> */}
        {/* <a className="btn btn-primary" href="/postDetails"> */}
        {/* <a className="btn btn-primary" href="/api/forum/posts/">
          Press into Post Details
        </a> */}
        <br />
        <Link className="btn btn-primary" to={`/posts/${postId}`}>
          Press into details
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
