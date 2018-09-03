import React from 'react';
import { connect } from 'react-redux';
import * as UserAction from '../redux/actions/userActions';
import { Link, withRouter } from 'react-router-dom';
import logo from '../assets/logo.png';

class Nav extends React.Component {
  orderOrQuestion = () => {
    if (this.props.authenticated) {
      if (this.props.role === 'student') {
        return (
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/CreateQuestion"
              // onClick={() => this.props.history.push('/CreateQuestion')}
            >
              Create Question
            </Link>
          </li>
        );
      } else {
        return (
          <React.Fragment>
            <li className="nav-item">
              <Link className="nav-link" to="/TakeQuestions">
                Take Questions
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/my-questions">
                My Questions
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
            className="btn btn-outline-secondary "
            onClick={() => this.props.logout()}
          >
            Logout
          </a>
        </li>
      );
    }
    return (
      <React.Fragment>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-outline-info" to="/signup">
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
            <Link className="nav-link" to="/userProfile">
              Profile
            </Link>
          </li>
        );
      } else {
        return (
          <React.Fragment>
            <li className="nav-item">
              <Link className="nav-link" to="/instructorProfile">
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{}}>
        <Link className="navbar-brand" style={{ color: '#00B0AF' }} to="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="/"
          />
          <span style={{ marginLeft: 5 }}>CodeEasy</span>
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
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            {this.orderOrQuestion()}
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/posts">
                Coding Community
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " to="/instructorProfile">
                Profile
              </Link>
            </li>

            <li className="nav-item ">
              <Link className="nav-link " to="/contact">
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
