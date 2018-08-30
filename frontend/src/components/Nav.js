import React from 'react';
import { connect } from 'react-redux';
import * as UserAction from '../redux/actions/userActions';

class Nav extends React.Component {
  loginOrLogout = () => {
    if (this.props.user && this.props.user.user) {
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
          <a className="nav-link" href="/login">
            Login
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signup">
            Sign Up
          </a>
        </li>
      </React.Fragment>
    );
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{}}>
        <a className="navbar-brand" href="/">
          CodeEasy
        </a>
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
            <li className="nav-item">
              <a className="nav-link" href="/pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/posts">
                Coding Community
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link " href="/contact">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/CreateQuestion">
                Create Question
              </a>
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
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  UserAction
)(Nav);
