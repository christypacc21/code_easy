// func component
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const OngoingCard = ({
  skill,
  questionDateTime,
  chatroomStartTime,
  content,
  imagePath,
  // username={}
  instructorId,
  studentId,
  rating,
  duration,
  fee,
  chatroomId,
  questionId
}) => {
  return (
    <div className="card">
      <div className="card-header text-muted">
        Related coding skills: | Chatroom Id [{chatroomId}] | Question Id [
        {questionId}] | Question created at [
        {moment({ questionDateTime }).format('lll')}(
        {moment(questionDateTime).fromNow()}
        )]
        {/* {role == instructor
            ? `InstuctorID [${instructorId}]`
            : `StudentID [${studentId}]`} */}
        <div
          style={{
            marginTop: '4px',
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <h3 style={{ margin: '0 3px' }}>
            <span className="badge badge-pill badge-info">{skill}</span>
          </h3>
        </div>
      </div>

      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            {imagePath ? (
              <img
                className="card-img-top codePhoto"
                style={{ width: 250, cursor: 'pointer' }}
                src={`${process.env.REACT_APP_API_SERVER}/${imagePath}`}
                alt={content}
                // onClick={() =>
                //   this.openLightbox(
                //     `${process.env.REACT_APP_API_SERVER}/${
                //       imagePath
                //     }`
                //   )
                // }
              />
            ) : (
              <p>This question has no image</p>
            )}
          </div>

          <div className="col-md-4">
            <h5 className="card-title">Question</h5>
            <p className="card-text">{content}</p>
            {!content ? (
              <div>Loading Chatroom</div>
            ) : (
              <Link to={`/chatroom/${chatroomId}`} className="btn btn-warning">
                Read Chat Record
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="card-footer text-muted">
        Chatroom started at : {moment({ chatroomStartTime }).format('lll')}(
        {moment(chatroomStartTime).fromNow()}) | Duration:
        {duration} mins | Fee:hkd$
        {fee} | Rating: {rating}
      </div>
    </div>
  );
};

export default OngoingCard;
