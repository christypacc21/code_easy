import React from 'react';
import { connect } from 'react-redux';

class instructorProfile extends React.Component {
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
            <h4>Earned Income :</h4>
            <p>
              HK$
              {profile.iBalance / 100}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

// export default instructorProfile;

function mapStateToProps(state) {
  return {
    profile: state.user.profile
  };
}

export default connect(
  mapStateToProps,
  null
)(instructorProfile);
