import React from 'react';
import './Chatroom.css';

const InstructorInfoTab = details => {
  // console.log('details', details.details);
  return (
    <div className="InstructorInfoDiv">
      <div className="InstructorImgName col-lg-3">
        <img
          className="profilePic"
          src={details.details.profilePic}
          alt="Instructor Pic"
        />

        <p>{details.details.displayName}</p>
      </div>

      <div className="InfoDiv col-lg-10">
        <p>
          <strong>Intro :</strong> {details.details.iIntroduction}
        </p>
        <p>
          <strong>Education : </strong>
          {details.details.iEducation}
        </p>
        <p>
          <strong>Coding experience :</strong> {details.details.iYearOfCodeExp}{' '}
          (yr)
        </p>
        <div className="ratingQ">
          <p>
            <strong>Rating : </strong>
            {details.details.iTotalRating / details.details.iNumRating}
            /5
          </p>
          <span />
          <p>
            <strong>QuestionAnswered </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstructorInfoTab;
