// func component
import React from 'react';
// import { Link } from 'react-router-dom';
import moment from 'moment';

const HistoryCard = ({ dateTime, content, imagePath }) => {
  // if (!postId) {
  //   return <h1>Loading posts</h1>;
  // }
  return (
    // <div className="card" >
    //   <p>
    //     Skills dateTime 'titlse' image 'userpic / username' 'Link to chatroom
    //     record' rating
    //   </p>
    // </div>
    <div style={{ height: '580px' }} className="card col-sm-6">
      <div className="card-body">
        <div style={{ fontSize: '12px' }}>
          {/* <p
            className="card-text"
            style={{ display: 'inline-block', marginRight: '2vw' }}
          >
            Skills
          </p> */}
          <p
            className="card-text"
            style={{ display: 'inline-block', marginRight: '2vw' }}
          >
            {moment({ dateTime }).format('lll')}
          </p>
          <h5 className="card-title">
            Content:
            {content}
          </h5>
          {/* <img
            className="card"
            style={{
              maxHeight: '10em',
              display: 'inline-block',
              marginRight: '2vw'
            }}
            alt="(Failed to show question img )"
            // src={`${process.env.REACT_APP_API_SERVER}/${propicPath}`}
          /> */}
          <p className="card-text">Username</p>
          {!imagePath ? (
            <p />
          ) : (
            <img
              className="card"
              style={{ maxHeight: '10em' }}
              alt="(Failed to show question img )"
              src={`${process.env.REACT_APP_API_SERVER}/${imagePath}`}
            />
          )}
        </div>
        {/* <Link className="btn btn-info btn-block">Enter chat record</Link> */}
      </div>
      <div>
        <p className="card-text">Rating: </p>
      </div>
    </div>
  );
};

export default HistoryCard;
