import React from 'react';

const InstructorInfo = (
  name,
  email,
  edu,
  intro,
  numRate,
  totalRate,
  codeExp,
  id,
  proPic,
  role
) => {
  return (
    <div>
      <img src={proPic} alt="Instructor Pro Pic" />
      <h1>{name}</h1>
      <p>Instructor ID : {id}</p>
      <p>{email}</p>
      <p>Education : {edu}</p>
      <p>Intro : {intro}</p>
      <p>Rating : {totalRate / numRate}</p>
      <p>Year of coding experience : {codeExp}</p>
    </div>
  );
};

export default InstructorInfo;
