// func component
import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
const MyCommentCard = ({
  // key,
  commentId,
  postId,
  commentTime,
  postTime,
  postTitle,
  commentContent,
  commentImagePath
}) => {
  if (!commentId) {
    return <h1>Loading comments</h1>;
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
              CommentID:
              {commentId} (for PostID:
              {postId} which was created at {postTime})
            </p>
            <p
              className="card-text"
              style={{ display: 'inline-block', marginRight: '2vw' }}
            >
              Ref Post : "{postTitle}"
            </p>
            <p
              className="card-text"
              style={{ fontSize: '20px', color: 'grey' }}
            >
              {commentTime} ({moment({ commentTime }).fromNow()})
            </p>
            <div style={{ matginBottom: '10px' }} />
          </div>
          {commentContent.length > 50 ? (
            (commentContent = 'Too many words, press in toread more detials')
          ) : (
            <p className="card-text">"{commentContent}"</p>
          )}
          {!commentImagePath ? (
            <p style={{ fontSize: '15px', color: 'lightgrey' }}>
              [[[This comment has no image]]]
            </p>
          ) : (
            <div>
              <img
                className="card"
                style={{ maxHeight: '10em' }}
                alt="(Failed to show Comment file )"
                src={`${process.env.REACT_APP_API_SERVER}/${commentImagePath}`}
              />
            </div>
          )}
          <br />
        </div>
        <Link className="btn btn-info btn-block" to={`/posts/${postId}`}>
          Press into details
        </Link>
      </div>
    </div>
  );
};

export default MyCommentCard;
