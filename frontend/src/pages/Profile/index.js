import React, { Component } from 'react';
import { connect } from 'react-redux';
import InstructorProfile from './instructorProfile';
import UserProfile from './userProfile';

class Profile extends Component {
  render() {
    const { user } = this.props;

    //TODO: clean this up with a better state or selector
    if (
      user &&
      user.profile &&
      user.profile &&
      user.profile.role === 'instructor'
    ) {
      return <InstructorProfile />;
    } else {
      return <UserProfile />;
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  null
)(Profile);
