import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
  render() {
    const { profile } = this.props;
    if (profile) {
      return (
        <div className="jumbotron jumbotron-fluid" style={{ margin: 0 }}>
          <div className="container">
            <h1 className="display-4">User Profile</h1>
            <br />
            <div>
              <h4>Display Name :</h4>
              <p>{profile.displayName}</p>
            </div>

            <div>
              <h4>Email :</h4>
              <p>{profile.email}</p>
            </div>

            <div>
              <h4>Question Credit(s) :</h4>
              <p>{profile.sQuestionCredit}</p>
            </div>
            <Link to={`/purchaseRecord`} className="btn btn-primary">
              Purchase Record
            </Link>
          </div>
        </div>
      );
    }
    return <div />;
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
)(UserProfile);
