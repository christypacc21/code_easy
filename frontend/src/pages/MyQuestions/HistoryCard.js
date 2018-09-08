// func component
import React from 'react';
import { Link } from 'react-router-dom';

const HistoryCard = () => {
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
      <div className="card-body" style={{ height: '510px' }}>
        <div style={{ fontSize: '12px' }}>
          <p
            className="card-text"
            style={{ display: 'inline-block', marginRight: '2vw' }}
          >
            Skills
          </p>
          <p
            className="card-text"
            style={{ display: 'inline-block', marginRight: '2vw' }}
          >
            dateTime
          </p>
          <h5 className="card-title">Title:</h5>
          <img
            className="card"
            style={{
              maxHeight: '10em',
              display: 'inline-block',
              marginRight: '2vw'
            }}
            alt="(Failed to show question image )"
            // src={`${process.env.REACT_APP_API_SERVER}/${propicPath}`}
          />
          <p className="card-text">Username</p>
          {/* <img
              className="card"
              style={{ maxHeight: '10em' }}
              alt="(Failed to show Post file )"
              // src={`${process.env.REACT_APP_API_SERVER}/${postImagePath}`}
            /> */}
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
