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
  postImagePath,
  count
  // count
}) => {
  // const postImagePath = `"${postImage}"`
  if (postContent.length > 50) {
    postContent = 'Too many words, press in to read more detials';
  }
  return (
    // <div id={key}>
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
              style={{ display: 'inline-block', marginRight: '2vw' }}
            >
              Created by: {username}
            </p>
            {!propicPath ? (
              // <p style={{ display: 'inline-block', marginRight: '2vw' }}>
              //   [[[This user has no pro pic]]]
              // </p>
              <p />
            ) : (
              <div>
                <img
                  className="card"
                  style={{
                    maxHeight: '10em',
                    display: 'inline-block',
                    marginRight: '2vw'
                  }}
                  alt="(Failed to show Post file )"
                  src={`${process.env.REACT_APP_API_SERVER}/${propicPath}`}
                />
              </div>
            )}
            <p className="card-text" style={{ fontSize: '20px' }}>
              {dateTime}
            </p>
            <div style={{ matginBottom: '10px' }} />
          </div>
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
          <p className="card-text">No. of comments {count}</p>
        </div>
        {this.params === undefined ? (
          <Link className="btn btn-info btn-block" to={`/posts/${postId}`}>
            Login to see post details and comments
          </Link>
        ) : (
          <Link className="btn btn-info btn-block" to={`/posts/${postId}`}>
            Press into details
          </Link>
        )}
      </div>
    </div>
  );
};

export default PostCard;
