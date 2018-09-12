// func component wif redux
import React from 'react';
import moment from 'moment';

const PostDetailsCard = ({
  postId,
  propicPath,
  username,
  dateTime,
  postTitle,
  postContent,
  postImagePath,
  role,
  count
}) => {
  // console.log('post image path-->');
  // console.log(postImagePath);
  return (
    <div className="card">
      <div className="card-body">
        <p
          className="card-text"
          style={{ display: 'inline-block', marginRight: '3vw' }}
        >
          PostID:
          {' ' + postId}
        </p>
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
                  maxHeight: '10em',
                  display: 'inline-block',
                  marginRight: '3vw'
                }}
                alt="(Failed to show propic)"
                src={propicPath}
              />
            </div>
          ))
        }
        <p
          className="card-text"
          style={{ display: 'inline-block', marginRight: '3vw' }}
        >
          Created by :{username}
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
          Created at: {dateTime} ({moment({ dateTime }).fromNow()})
        </p>
        <h3 className="card-title">
          <strong>Post Title: {postTitle}</strong>
        </h3>
        <p className="card-text">Post Content: {postContent}</p>
        {
          (postImagePath = /* [CODE REVIEW] FIX IT. Single equal sign */ `${
            process.env.REACT_APP_API_SERVER
          }/null` ? (
            <p>[[[This post has no image]]]</p>
          ) : (
            <div>
              <img
                className="card"
                style={{ maxWidth: '60vw' }}
                alt="(Failed to show Post file)"
                src={postImagePath}
              />
            </div>
          ))
        }
        <p>No. of comments: {count}</p>
        <br />
      </div>
    </div>
  );
};

export default PostDetailsCard;
