// func component
import React from 'react';
import { Link } from 'react-router-dom';
import iconComments from '../../../assets/comments.png';

const PostCard = ({
  postId,
  propicPath,
  username,
  dateTime,
  dateTimeFromNow,
  postTitle,
  postContent,
  postImagePath,
  count,
  auth
}) => {
  return (
    <div>
      <div style={{ height: '530px' }}>
        <div className="card-body" style={{ height: '460px' }}>
          <div style={{ fontSize: '12px' }}>
            <p
              className="card-text"
              style={{
                display: 'inline-block',
                marginRight: '2vw',
                marginBottom: 0
              }}
            >
              PostID:
              {postId}
            </p>
            <p
              className="card-text"
              style={{
                display: 'inline-block',
                marginRight: '2vw',
                marginBottom: 0
              }}
            >
              Created by: {username}
            </p>
            <p
              style={{
                float: 'right',
                color: 'darkgrey',
                margin: '0',
                fontSize: '20px'
              }}
            >
              <img
                src={iconComments}
                alt="Number of Comments"
                className={iconComments}
                style={{ height: '25px', width: '25px' }}
              />{' '}
              {count}
            </p>

            {
              (propicPath = `${process.env.REACT_APP_API_SERVER}/null` ? (
                <p />
              ) : (
                <div>
                  <img
                    className="card"
                    style={{
                      maxHeight: '10em',
                      display: 'inline-block',
                      marginRight: '2vw'
                    }}
                    alt="(Failed to show Post file )"
                    src={`${process.env.REACT_APP_API_SERVER}/${propicPath}`}
                  />
                </div>
              ))
            }
            <p
              className="card-text"
              style={{ fontSize: '15px', color: 'lightgrey' }}
            >
              {dateTime} ({dateTimeFromNow})
            </p>
            <div style={{ marginBottom: '10px' }} />
          </div>
          <h5 className="card-title">Title: {postTitle}</h5>
          {postContent.length > 30 ? (
            (postContent =
              '"' +
              postContent
                .split(' ')
                .splice(0, 7)
                .join(' ')
                .concat('...'))
          ) : (
            <p className="card-text">"{postContent}"</p>
          )}
          {!postImagePath ? (
            <p style={{ color: 'lightgrey' }}>[[[This post has no image]]]</p>
          ) : (
            <div>
              <img
                className="card"
                style={{ maxHeight: '10em' }}
                alt="(Failed to show Post file )"
                src={`${process.env.REACT_APP_API_SERVER}/${postImagePath}`}
              />
            </div>
          )}
          <br />
        </div>

        {!auth ? (
          <Link
            className="btn btn-info btn-block"
            style={{ fontSize: '17px' }}
            to={`/login`}
          >
            Login to see details and comments
          </Link>
        ) : (
          <Link className="btn btn-info btn-block" to={`/posts/${postId}`}>
            Press into details
          </Link>
        )}
      </div>
    </div>
  );
};

export default PostCard;
