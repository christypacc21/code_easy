import React from 'react';
import { connect } from 'react-redux';
import * as UserAction from '../redux/actions/userActions';
import { Link, withRouter } from 'react-router-dom';
import logo from '../assets/logo.png';

class Nav extends React.Component {
  orderOrQuestion = () => {
    // console.log('this.props-Nav', this.props);
    if (this.props.authenticated) {
      if (this.props.role === 'student') {
        return (
          <React.Fragment>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: '#FFFFFF' }}
                to="/AskQuestion"
                // onClick={() => this.props.history.push('/CreateQuestion')}
              >
                Create Question
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: '#FFFFFF' }}
                to="/my-questions/ongoing"
              >
                My Questions
              </Link>
            </li>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: '#FFFFFF' }}
                to="/TakeQuestions"
              >
                Take Questions
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: '#FFFFFF' }}
                to="/my-questions/ongoing"
              >
                My Answers
              </Link>
            </li>
          </React.Fragment>
        );
      }
    }
    return null;
  };

  loginOrLogout = () => {
    if (this.props.authenticated) {
      return (
        <li className="nav-item">
          <a
            className=" btn btn-primary "
            style={{ color: '#FFFFFF' }}
            onClick={() => this.props.logout(this.props.history)}
          >
            Logout
          </a>
        </li>
      );
    }
    return (
      <React.Fragment>
        <li className="nav-item">
          <Link className="nav-link" style={{ color: '#FFFFFF' }} to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="btn btn btn-primary "
            style={{ color: '#FFFFFF' }}
            to="/signup"
          >
            Sign Up Now!
          </Link>
        </li>
      </React.Fragment>
    );
  };

  userProfileOrInstructorProfile = () => {
    if (this.props.authenticated) {
      if (this.props.role === 'student') {
        return (
          <li className="nav-item">
            <Link
              className="nav-link"
              style={{ color: '#FFFFFF' }}
              to="/userProfile"
            >
              Profile
            </Link>
          </li>
        );
      } else {
        return (
          <React.Fragment>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: '#FFFFFF' }}
                to="/instructorProfile"
              >
                Profile
              </Link>
            </li>
          </React.Fragment>
        );
      }
    }
  };

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar navbar-light"
        style={{ backgroundColor: '#00B0AF' }}
      >
        <Link className="navbar-brand" style={{ color: '#FFFFFF' }} to="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="/"
          />
          <span className="codeLogo" style={{ marginLeft: 5 }}>
            CodeEasy
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ color: '#FFFFFF' }} />
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          style={{ color: '#FFFFFF' }}
        >
          <ul className="navbar-nav mr-auto">
            {this.orderOrQuestion()}
            {!this.props.authenticated || this.props.role === 'student' ? (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color: '#FFFFFF' }}
                  to="/pricing"
                >
                  Pricing
                </Link>
              </li>
            ) : null}
            <li className="nav-item">
              <Link
                className="nav-link "
                style={{ color: '#FFFFFF' }}
                to="/posts"
              >
                Coding Community
              </Link>
            </li>
            {this.userProfileOrInstructorProfile()}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li> */}

            <li className="nav-item ">
              <Link
                className="nav-link "
                style={{ color: '#FFFFFF' }}
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">{this.loginOrLogout()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.user.authenticated,
    role: state.user && state.user.profile && state.user.profile.role
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    UserAction
  )(Nav)
);
