// func component
import React from 'react';

const CommentCard = ({
  // commentId,
  commentNum,
  propicPath,
  role,
  username,
  commentTime,
  commentContent,
  commentImagePath,
  commentTimeFromNow
}) => {
  // if (!commentNum) {
  //   return (
  //     <div className="jumbotron">
  //       <h1>This Post has no comment! Wanna add one?</h1>
  //     </div>
  //   );
  // } else {
  return (
    <div>
      <div
        className="card-body"
        // style={{
        //   borderRadius: '1em'
        // }}
      >
        {/* <p className="card-text">
            CommentID:
            {commentId}
          </p> */}
        <div>
          <h5
            className="card-text"
            style={{
              display: 'inline-block',
              marginRight: '1vw'
            }}
          >
            <strong>[ {commentNum} ] </strong>
          </h5>

          {
            (propicPath = `${process.env.REACT_APP_API_SERVER}/null` ? (
              // <p style={{ display: 'inline-block', marginRight: '3vw' }}>
              //   [[[This user has no pro pic]]]
              // </p>
              <p style={{ display: 'inline-block' }} />
            ) : (
              <div>
                <img
                  className="card"
                  style={{
                    maxHeight: '7vh',
                    maxWidth: '20vw',
                    marginRight: '3vw'
                  }}
                  alt="(Failed to show Post file )"
                  src={propicPath}
                />
              </div>
            ))
          }

          <p
            className="card-text"
            style={{ display: 'inline-block', marginRight: '3vw' }}
          >
            Username: {username}
          </p>
          <p
            className="card-text"
            style={{ display: 'inline-block', marginRight: '3vw' }}
          >
            Role: {role}
          </p>
          <p
            className="card-text"
            style={{ display: 'inline-block', marginRight: '3vw' }}
          >
            Created at:
            <span style={{ paddingLeft: '15px' }} />
            {commentTime} ({commentTimeFromNow})
          </p>
        </div>
        <div className="jumbotron">
          <p className="card-text">Content: {commentContent}</p>
          {!commentImagePath ? (
            <p>[[[This post has no image]]]</p>
          ) : (
            <div>
              <img
                className="card"
                style={{ maxWidth: '60vw' }}
                alt="(Failed to show Post file )"
                src={`${process.env.REACT_APP_API_SERVER}/${commentImagePath}`}
              />
            </div>
          )}
        </div>
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
};
// };

export default CommentCard;
