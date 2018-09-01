import React from 'react';
import { connect } from 'react-redux';
import * as UserAction from '../redux/actions/userActions';
import { Link, withRouter } from 'react-router-dom';

class Nav extends React.Component {
  question = () => {
    if (this.props.authenticated) {
      return (
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/CreateQuestion"
            // onClick={() => this.props.history.push('/CreateQuestion')}
          >
            Question
          </Link>
        </li>
      );
    }
    return null;
  };

  loginOrLogout = () => {
    if (this.props.authenticated) {
      return (
        <li className="nav-item">
          <a className="nav-link" onClick={() => this.props.logout()}>
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
          <Link className="nav-link" to="/signup">
            Sign Up
          </Link>
        </li>
      </React.Fragment>
    );
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{}}>
        <Link className="navbar-brand" to="/">
          CodeEasy
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
          <ul className="navbar-nav">
            {this.question()}
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
              <Link className="nav-link " to="/contact">
                Contact Us
              </Link>
            </li>

            {this.loginOrLogout()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.user.authenticated,
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    UserAction,
  )(Nav),
);
