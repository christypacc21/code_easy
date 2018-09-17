// func component
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import 'tachyons';
const CommuPostCard = ({
  postId,
  username,
  dateTime,
  dateTimeFromNow,
  postTitle,
  postContent,
  postImagePath,
  count,
  auth
}) => {
  if (!postId) {
    return <h1>Loading posts</h1>;
  }
  return (
    <div className="LandingPagePost container-fluid grow">
      {auth ? (
        <Link className="link" to={`/posts/${postId}`}>
          <div className="LandingPagePostHeader">
            <div className="row ">
              <div className="col-lg-10 ">
                <p>
                  Created at: {dateTime} ({dateTimeFromNow})
                </p>
              </div>
              <div className="col-lg-2">
                <p>Comments: {count}</p>
              </div>
            </div>
          </div>
          <div className="LandingPagePostContent container-fluid">
            <div className="row LandingPagePostContentFlex">
              <div className="col-lg-1 userNameDiv">
                {username}
                <br />
                <div className="imageBox" />
              </div>
              <div className="col-lg-11">
                <div className="contentBox">
                  <div className="contentBoxChild postTitle">
                    <p>{postTitle}</p>
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
                      src={`${
                        process.env.REACT_APP_API_SERVER
                      }/${postImagePath}`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <Link className="link" to={`/login`}>
          <div className="LandingPagePostHeader">
            <div className="row ">
              <div className="col-lg-10 ">
                <p>
                  Created at: {dateTime} ({dateTimeFromNow})
                </p>
              </div>
              <div className="col-lg-2">
                <p>Comments: {count}</p>
              </div>
            </div>
          </div>
          <div className="LandingPagePostContent container-fluid">
            <div className="row LandingPagePostContentFlex">
              <div className="col-lg-1 userNameDiv">
                {username}
                <br />
                <div className="imageBox" />
              </div>
              <div className="col-lg-11">
                <div className="contentBox">
                  <div className="contentBoxChild postTitle">
                    <p>{postTitle}</p>
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
                      src={`${
                        process.env.REACT_APP_API_SERVER
                      }/${postImagePath}`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default CommuPostCard;
