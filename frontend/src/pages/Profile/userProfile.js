import React from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../redux/actions/userActions';

class userProfile extends React.Component {
  render() {
    const { profile } = this.props;
    if (profile) {
      return (
        <div className="jumbotron jumbotron-fluid" style={{ margin: 0 }}>
          <div className="container">
            <h1 className="display-4">User Profile</h1>

            <div>
              <h4>Display Name:</h4>
              <p>{profile.displayName}</p>
            </div>

            <div>
              <h4>Email:</h4>
              <p>{profile.email}</p>
            </div>

            <div>
              <h4>Credit:</h4>
              <p>{profile.sQuestionCredit}</p>
            </div>
          </div>
        </div>
      );
    }
    return <div />;
  }
}

function mapStateToProps(state) {
  return {
    profile: state.user.profile,
  };
}

export default connect(
  mapStateToProps,
  userActions,
)(userProfile);
