// func component wif redux
import React from 'react';
import iconComments from '../../../assets/comments.png';

const PostDetailsCard = ({
  postId,
  propicPath,
  username,
  dateTime,
  dateTimeFromNow,
  postTitle,
  postContent,
  postImagePath,
  role,
  count
}) => {
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
          Created by: {username}
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
          Created at: {dateTime} ({dateTimeFromNow})
        </p>

        <h3 className="card-title">
          <strong>{postTitle}</strong>
        </h3>
        <p className="card-text">"{postContent}"</p>
        {!postImagePath ? (
          <p>[[[This post has no image]]]</p>
        ) : (
          <div>
            <img
              className="card"
              style={{ maxWidth: '60vw' }}
              alt="(Failed to show Post file)"
              src={`${process.env.REACT_APP_API_SERVER}/${postImagePath}`}
            />
          </div>
        )}
        <p
          style={{
            margin: '20px 0px 0px 0px'
          }}
        >
          <img
            src={iconComments}
            alt="Number of Comments"
            className="iconComments"
            style={{ height: '40px', width: '40px' }}
          />{' '}
          {count}
        </p>
        <br />
      </div>
    </div>
  );
};

export default PostDetailsCard;
