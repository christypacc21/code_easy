// func component
import React from 'react';
import { Link } from 'react-router-dom';
import './MyQ.css';

const HistoryCard = ({
  skills,
  questionDateTime,
  questionFromNow,
  chatroomStartTime,
  chatroomFromNow,
  content,
  imagePath,
  // username={}
  // instructorId,
  // studentId,
  rating,
  // duration,
  // fee,
  chatroomId,
  questionId
}) => {
  return (
    <div className="card">
      <div className="card-header">
        Related coding skills:
        {/* | Chatroom id [{chatroomId}] | Question id [
        {questionId}] */}
        {/* {role == instructor
            ? `InstuctorID [${instructorId}]`
            : `StudentID [${studentId}]`} */}
        <div className="skills">
          {skills.map((skill, j) => (
            <h3 key={j}>
              <span className="badge badge-pill badge-info">{skill.skill}</span>
            </h3>
          ))}
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
              <Link to={`/chatroom/${chatroomId}`} className="btn btn-warning ">
                Read Chat Record
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="card-footer text-muted">
        Chatroom started at : {chatroomStartTime} ({chatroomFromNow})
        {/* | Duration: {duration} mins | Fee:hkd${fee}  */} | Rating:{' '}
        {rating ? rating : 'n/a'}
      </div>
    </div>
  );
};

export default HistoryCard;
