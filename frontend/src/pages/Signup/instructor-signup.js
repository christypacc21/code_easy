import React, { Component } from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import * as UserActions from '../../redux/actions/userActions';

class UserSignup extends Component {
  state = {
    email: '',
    displayName: '',
    password: '',
    role: 'instructor'
  };

  componentDidUpdate(prevProps) {
    if (this.props.authenticated) {
      this.props.history.push('/instructor-profileForm');
    }
  }

  componentClicked() {
    return null;
  }

  responseFacebook = userInfo => {
    if (userInfo.accessToken) {
      console.log('fb response: ', userInfo);
      this.props.loginByFacebook(userInfo.accessToken, this.state.role, null);
    }
    return null;
  };

  render() {
    const { displayName, email, password, role } = this.state;

    return (
      <div
        className="jumbotron jumbotron-fluid"
        style={{ margin: 0, background: '#00B0AF' }}
      >
        <div className="container">
          <div className="row">
            <h2 style={{ color: 'white' }}>Hi, Instructor!</h2>
          </div>
          <div className="row">
            <h6 style={{ color: 'white' }}>
              Please fill all information below
            </h6>
          </div>
          <FacebookLogin
            appId={process.env.REACT_APP_FACEBOOK_APP_ID}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
          />
          <br />
          <br />
          <form>
            <div className="form-group">
              <label htmlFor="inputEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                aria-describedby="emailHelp"
                placeholder="Email"
                value={email}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </div>
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
            <div className="form-group">
              <label htmlFor="inputPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                value={password}
                onChange={e => this.setState({ password: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputDisplay">Username</label>
              <input
                type="name"
                className="form-control"
                id="inputDisplay"
                placeholder="Username"
                value={displayName}
                onChange={e => this.setState({ displayName: e.target.value })}
              />
            </div>
          </form>

          <br />
          <a
            type="submit"
            className="btn btn-primary"
            onClick={() =>
              this.props.localSignup(displayName, email, password, role)
            }
          >
            Submit
          </a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.user.authenticated
  };
}

export default connect(
  mapStateToProps,
  UserActions
)(UserSignup);
