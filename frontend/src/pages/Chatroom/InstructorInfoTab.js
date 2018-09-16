import React from 'react';
import './Chatroom.css';

const InstructorInfoTab = details => {
  console.log('details', details.details);
  return (
    <div>
      <div className="nameTab container">
        <img
          className="profilePic"
          src={details.details.profilePic}
          alt="Instructor Pic"
        />
        <br />
        <h1>{details.details.displayName}</h1>
      </div>
      <div className="infoTab container">
        <p>Intro : {details.details.iIntroduction}</p>
        <p>Education : {details.details.iEducation}</p>
        <p>Year of coding experience : {details.details.iYearOfCodeExp}</p>
        <p>
          Rating : {details.details.iTotalRating / details.details.iNumRating}
          /5
        </p>
      </div>
    </div>
  );
};

export default InstructorInfoTab;
