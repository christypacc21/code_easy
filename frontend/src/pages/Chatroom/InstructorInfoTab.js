import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
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
        <b>Your Instructor Profile:</b>
        <img
          className="profilePic"
          src={details.details.profilePic}
          alt="Instructor Pic"
        />

        <p>{details.details.displayName}</p>
      </div>

      <div className="InfoDiv col-lg-6">
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
        <strong>Coding Skill(s) :</strong>{' '}
        {details.details.skillInfo ? (
          <div className="skills">
            {details.details.skillInfo.map((skill, i) => (
              <h4 key={i}>
                <span className="badge badge-pill badge-info">{skill}</span>
              </h4>
            ))}
          </div>
        ) : (
          <p>n/a</p>
        )}
        <div className="ratingQ">
          {details.details.iNumRating ? (
            <p>
              <strong>Rating : </strong>
              <Rating
                initialRating={
                  details.details.iTotalRating / details.details.iNumRating
                }
                emptySymbol={
                  <FontAwesomeIcon icon={faStar} size="1x" color="grey" />
                }
                fullSymbol={
                  <FontAwesomeIcon icon={faStar} size="1x" color="gold" />
                }
                readonly
              />
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
