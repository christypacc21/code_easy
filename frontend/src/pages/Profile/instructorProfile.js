import React from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../redux/actions/userActions';

class instructorProfile extends React.Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="jumbotron jumbotron-fluid" style={{ margin: 0 }}>
        <div className="container">
          <h1 className="display-4">Instructor Profile</h1>

          <div>
            <h4>Display Name:</h4>
            <p>{profile.display_name}</p>
          </div>

          <div>
            <h4>Email:</h4>
            <p>{profile.email}</p>
          </div>

          <div>
            <h4>Education:</h4>
            <p>{profile.i_education}</p>
          </div>

          <div>
            <h4>Introduction:</h4>
            <p>{profile.i_introduction}</p>
          </div>
        </div>
      </div>
    );
  }
}

// export default instructorProfile;

function mapStateToProps(state) {
  return {
    profile: state.user.profile.userInfo,
  };
}

export default connect(
  mapStateToProps,
  userActions,
)(instructorProfile);