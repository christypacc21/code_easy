// func component
import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
const MyCommentCard = ({
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
      <div className="height-c">
        <div className="card-body card-body-c">
          <div className="card-selfhead-c">
            <p className="card-text-c">
              CommentID:
              {commentId} (for PostID:
              {postId} which was created at {postTime})
            </p>
            <p className="card-text-c">Ref Post : "{postTitle}"</p>
            <p className="card-time-c">
              {commentTime} ({moment({ commentTime }).fromNow()})
            </p>
            <div className="break-c" />
          </div>
          {commentContent.length > 50 ? (
            (commentContent = 'Too many words, press in toread more detials')
          ) : (
            <p className="card-text-c">"{commentContent}"</p>
          )}
          {!commentImagePath ? (
            <p className="image-text-c">[[[This comment has no image]]]</p>
          ) : (
            <div>
              <img
                className="card-image-c"
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
