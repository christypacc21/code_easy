import React from 'react';
import './Chatroom.css';

const InstructorInfoTab = details => {
  // console.log('details', details.details);
  const codeExpOptions = [
    '< 1',
    '1 - 3 years',
    '4 - 6 years',
    '7 - 9 years',
    '9 - 12 years',
    'More than 12 years'
  ];

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
          <strong>Coding Experience :</strong>{' '}
          {codeExpOptions[details.details.iYearOfCodeExp]}
        </p>
        <div className="ratingQ">
          {details.details.iNumRating ? (
            <p>
              <strong>Rating : </strong>
              {details.details.iTotalRating / details.details.iNumRating}
              /5
            </p>
          ) : (
            <p>
              <strong>Rating : </strong>
              n/a
            </p>
          )}
          <span />
          {/* <p>
            <strong>QuestionAnswered </strong>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default InstructorInfoTab;
