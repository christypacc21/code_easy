// func component
import React from 'react';
import { Link } from 'react-router-dom';
const MyPostCard = ({
  // key,
  postId,
  dateTime,
  dateTimeFromNow,
  postTitle,
  postContent,
  postImagePath,
  count
}) => {
  if (!postId) {
    return <h1>Loading posts</h1>;
  }
  return (
    <div>
      <div style={{ height: '580px' }}>
        <div className="card-body" style={{ height: '510px' }}>
          <div style={{ fontSize: '12px' }}>
            <p
              className="card-text"
              style={{ display: 'inline-block', marginRight: '2vw' }}
            >
              PostID:
              {postId}
            </p>
            <p
              className="card-text"
              style={{ fontSize: '20px', color: 'lightgrey' }}
            >
              {dateTime} ({dateTimeFromNow})
            </p>
            <div style={{ matginBottom: '10px' }} />
          </div>
          <h5 className="card-title">Title: {postTitle}</h5>
          {postContent.length > 50 ? (
            (postContent = 'Too many words, press in toread more detials')
          ) : (
            <p className="card-text">Content: {postContent}</p>
          )}
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
          <br />
          <p className="card-text">No. of comments {count}</p>
        </div>
        <Link className="btn btn-info btn-block" to={`/posts/${postId}`}>
          Press into details
        </Link>
      </div>
    </div>
  );
};

export default MyPostCard;
