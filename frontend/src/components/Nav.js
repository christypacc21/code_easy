import React from 'react';
import { connect } from 'react-redux';
import * as UserAction from '../redux/actions/userActions';
import { Link, withRouter } from 'react-router-dom';
import logo from '../assets/logo.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
  // NavLink
} from 'reactstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  orderOrQuestion = () => {
    // console.log('this.props-Nav', this.props);
    if (this.props.authenticated) {
      if (this.props.role === 'student') {
        return (
          <React.Fragment>
            <NavItem>
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
            </NavItem>
            <NavItem>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color: '#FFFFFF' }}
                  to="/my-questions/ongoing"
                >
                  My Questions
                </Link>
              </li>
            </NavItem>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            <NavItem>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color: '#FFFFFF' }}
                  to="/TakeQuestions"
                >
                  Take Questions
                </Link>
              </li>
            </NavItem>
            <NavItem>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color: '#FFFFFF' }}
                  to="/my-questions/ongoing"
                >
                  My Answers
                </Link>
              </li>
            </NavItem>
          </React.Fragment>
        );
      }
    }
    return null;
  };

  loginOrLogout = () => {
    if (this.props.authenticated) {
      return (
        <NavItem>
          <li className="nav-item">
            <a
              className=" btn btn-primary "
              style={{ color: '#FFFFFF' }}
              onClick={() => this.props.logout(this.props.history)}
            >
              Logout
            </a>
          </li>
        </NavItem>
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
          <NavItem>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: '#FFFFFF' }}
                to="/userProfile"
              >
                Profile
              </Link>
            </li>
          </NavItem>
        );
      } else {
        return (
          <NavItem>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: '#FFFFFF' }}
                to="/instructorProfile"
              >
                Profile
              </Link>
            </li>
          </NavItem>
        );
      }
    }
  };

  render() {
    return (
      <div>
        <Navbar
          color="faded"
          light
          expand="md"
          style={{ backgroundColor: '#00B0AF' }}
        >
          <NavbarBrand
            className="navbar-brand"
            style={{ color: '#FFFFFF' }}
            to="/"
          >
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
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="mr-auto">
              {this.orderOrQuestion()}
              {!this.props.authenticated || this.props.role === 'student' ? (
                <NavItem>
                  <Link
                    className="nav-link"
                    style={{ color: '#FFFFFF' }}
                    to="/pricing"
                  >
                    Pricing
                  </Link>
                </NavItem>
              ) : null}
              <NavItem>
                <Link
                  className="nav-link "
                  style={{ color: '#FFFFFF' }}
                  to="/posts"
                >
                  Coding Community
                </Link>
              </NavItem>
              {this.userProfileOrInstructorProfile()}
              <NavItem>
                <Link
                  className="nav-link "
                  style={{ color: '#FFFFFF' }}
                  to="/contact"
                >
                  Contact Us
                </Link>
              </NavItem>
            </Nav>
            <Nav navbar className="ml-auto">
              {this.loginOrLogout()}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
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
  )(NavBar)
);
