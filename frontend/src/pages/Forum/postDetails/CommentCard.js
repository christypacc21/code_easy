// func component
import React from 'react';

const CommentCard = ({
  commentId,
  propicPath,
  role,
  username,
  dateTime,
  commentContent,
  commentImagePath
}) => {
  if (!commentId) {
    return (
      <div className="jumbotron">
        <h1>This Post has no comment! Wanna add one?</h1>
      </div>
    );
  } else {
    return (
      <div>
        <div className="card-body">
          <p className="card-text">
            CommentID:
            {commentId}
          </p>
          {
            (propicPath = `${
              process.env.REACT_APP_API_SERVER
            }/${propicPath}` ? (
              <p>[[[This user has no pro pic]]]</p>
            ) : (
              <div>
                <img
                  className="card"
                  style={{ maxHeight: '10em' }}
                  alt="(Failed to show Post file )"
                  src={propicPath}
                />
              </div>
            ))
          }
          <p className="card-text">
            Role:
            {role}
          </p>
          <p className="card-text">Created by: {username}</p>
          <p className="card-text">Created at: {dateTime}</p>
          <p className="card-text">{commentContent}</p>
          {!commentImagePath ? (
            <p>[[[This post has no image]]]</p>
          ) : (
            <div>
              <img
                className="card"
                alt="(Failed to show Post file )"
                src={`${process.env.REACT_APP_API_SERVER}/${commentImagePath}`}
              />
            </div>
          )}
        </div>
      </div>
      // <div>
      //   <form
      //       action="/posts/{{post_id}}/comments/{{id}}?_method=DELETE"
      //       method="post"
      //       style="float:right"
      //     >
      //   <button class="btn btn-danger btn-sm">Delete comment</button>
      //   </form>
      // </div>
    );
  }
};

export default CommentCard;
