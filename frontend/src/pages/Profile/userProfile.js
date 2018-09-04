import React from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../redux/actions/userActions';

class userProfile extends React.Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="jumbotron jumbotron-fluid" style={{ margin: 0 }}>
        <div className="container">
          <h1 className="display-4">User Profile</h1>

          <div>
            <h4>Display Name:</h4>
            <p>{profile.display_name}</p>
          </div>

          <div>
            <h4>Email:</h4>
            <p>{profile.email}</p>
          </div>
        </div>
      </div>
    );
  }
}
// export default userProfile;
function mapStateToProps(state) {
  return {
    profile: state.user.profile.userInfo
  };
}

export default connect(
  mapStateToProps,
  userActions
)(userProfile);
