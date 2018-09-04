// func component
import React from 'react';

const CommentCard = ({
  key,
  propicPath,
  username,
  dateTime,
  commentContent,
  commentImagePath
}) => {
  return (
    <div>
      <div className="card-body">
        <p className="card-text">
          CommentID:
          {key}
        </p>
        <img alt="User propic" src={propicPath}>
          UserPropic
        </img>
        <p className="card-text">{username}</p>
        <p className="card-text">{dateTime}</p>
        <p className="card-text">{commentContent}</p>
        <img alt="Commentfile" src={commentImagePath} />
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
};

export default CommentCard;
