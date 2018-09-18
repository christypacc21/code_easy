import React from 'react';
import { connect } from 'react-redux';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class InstructorProfile extends React.Component {
  render() {
    const { profile } = this.props;
    const codeExpOptions = [
      '< 1',
      '1 - 3 years',
      '4 - 6 years',
      '7 - 9 years',
      '9 - 12 years',
      'More than 12 years'
    ];

    return (
      <div className="jumbotron jumbotron-fluid" style={{ margin: 0 }}>
        <div className="container">
          <h1 className="display-4">Instructor Profile</h1>
          <br />
          <div>
            <h4>Display Name:</h4>
            <p>{profile.displayName}</p>
          </div>

          <div>
            <h4>Email:</h4>
            <p>{profile.email}</p>
          </div>

          <div>
            <h4>Introduction:</h4>
            <p>{profile.iIntroduction}</p>
          </div>

          <div>
            <h4>Education:</h4>
            <p>{profile.iEducation}</p>
          </div>

          <div>
            <h4>Coding Experience :</h4>
            <p> {codeExpOptions[profile.iYearOfCodeExp]}</p>
          </div>

          <div>
            <h4>Coding Skill(s) :</h4>
            {profile.instructorInfo ? (
              <div className="skills">
                {profile.instructorInfo.map((skill, i) => (
                  <h3 key={i}>
                    <span className="badge badge-pill badge-info">
                      {skill.skill}
                    </span>
                  </h3>
                ))}
              </div>
            ) : (
              <p>n/a</p>
            )}
            <br />
          </div>

          <div>
            <h4>Earned Income :</h4>
            <p>
              HK$
              {profile.iBalance / 100}
            </p>
          </div>

          <div>
            <h4>Rating :</h4>
            <p>
              <Rating
                initialRating={profile.iTotalRating / profile.iNumRating}
                emptySymbol={
                  <FontAwesomeIcon icon={faStar} size="1x" color="grey" />
                }
                fullSymbol={
                  <FontAwesomeIcon icon={faStar} size="1x" color="gold" />
                }
                readonly
              />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.user.profile
  };
}

export default connect(
  mapStateToProps,
  null
)(InstructorProfile);
