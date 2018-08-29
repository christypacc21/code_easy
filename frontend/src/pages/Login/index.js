import React from 'react';
// import FacebookLogin, { ReactFacebookLoginInfo } from "react-facebook-login";
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';

import * as UserActions from '../../redux/actions/userActions';

// import { loginFacebook } from "../redux/auth/actions";

class PureLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: ''
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.user && this.props.user !== prevProps.user) {
      this.props.history.push('/profile');
    }
  }

  componentClicked() {
    return null;
  }

  responseFacebook = userInfo => {
    if (userInfo.accessToken) {
      console.log('fb response: ', userInfo);
      this.props.loginByFacebook(userInfo.accessToken);
    }
    return null;
  };

  onEmailLogin = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.loginByEmail(email, password);
  };

  render() {
    console.log('fb id: ', process.env.REACT_APP_FACEBOOK_APP_ID);
    return (
      <div>
        <h3 className="text-center">Login Form</h3>
        <div className="container">
          <form>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                name="email"
                className="form-control"
                onChange={e => {
                  this.setState({ email: e.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={e => {
                  this.setState({ password: e.target.value });
                }}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={e => this.onEmailLogin(e)}
            >
              Login
            </button>
          </form>
          <h4 className="text-center"> OR </h4>
          <div className="text-center">
            <FacebookLogin
              appId={process.env.REACT_APP_FACEBOOK_APP_ID}
              fields="name,email,picture"
              onClick={this.componentClicked}
              callback={this.responseFacebook}
            />
          </div>
        </div>
      </div>
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
  UserActions
)(PureLogin);
