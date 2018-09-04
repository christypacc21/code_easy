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
          <img
            alt="User propic"
            src={`${process.env.REACT_APP_API_SERVER} /${propicPath}`}
          />
          <p className="card-text">
            Role:
            {role}
          </p>
          <p className="card-text">Created by: {username}</p>
          <p className="card-text">Created at: {dateTime}</p>
          <p className="card-text">{commentContent}</p>
          <img
            alt="(Failed to show comment's image)"
            src={`${process.env.REACT_APP_API_SERVER}/${commentImagePath}`}
          />
        </div>
      </div>
      // <div>
      //   <form
      //       action="/posts/{{post_id}}/comments/{{id}}?_method=DELETE"
      //       method="post"
      //       style="float:right"
      //     >
      //   <button class="btn btn-danger btn-sm">Delete advice</button>
      //   </form>
      // </div>
    );
  }
};

export default CommentCard;
