// func component
import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import 'tachyons';
const CommuPostCard = ({
  // key,
  postId,
  propicPath,
  username,
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
    <div className="LandingPagePost container-fluid grow">
      <Link className="link" to={`/posts/${postId}`}>
        <div className="LandingPagePostHeader">
          <div className="row">
            <div className="col-10">
              Created at: {dateTime} ({dateTimeFromNow})
            </div>
            <div className="col-2">No. of comment: {count}</div>
          </div>
        </div>
        <div className="LandingPagePostContent container-fluid">
          <div className="row">
            <div className="col-1">
              {username}
              <br />
              <div className="imageBox">
                {!propicPath ? (
                  <p />
                ) : (
                  <img
                    src={`${process.env.REACT_APP_API_SERVER}/${propicPath}`}
                    alt=""
                    // className="container-fluid"
                  />
                )}
              </div>
            </div>
            <div className="col-11 container">
              <div className="contentBox">
                <div className="contentBoxChild">
                  <h3>{postTitle}</h3>
                </div>
              </div>
              <div className="contentBox">
                <div className="contentBoxChild">
                  <p>{postContent}</p>
                </div>
              </div>
              <div className="contentBox">
                <div className="contentBoxChild commuPostImage">
                  <img
                    src={`${process.env.REACT_APP_API_SERVER}/${postImagePath}`}
                    alt=""
                    // className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CommuPostCard;
