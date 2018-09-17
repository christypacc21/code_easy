import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';

import * as UserActions from '../../redux/actions/userActions';

class PureLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  // componentDidMount() {
  //   console.log('this.props', this.props);
  //   if (this.props.authenticated) {
  //     if (this.props.role === 'student') {
  //       this.props.history.push('/CreateQuestion');
  //     } else {
  //       this.props.history.push('/TakeQuestions'); //instructor after sign up>TakeQuestions
  //     }
  //   }
  // }

  componentClicked() {
    return null;
  }

  responseFacebook = userInfo => {
    if (userInfo.accessToken) {
      console.log('fb response: ', userInfo);
      console.log('fb this.props.history: ', this.props.history);

      this.props.loginByFacebook(
        userInfo.accessToken,
        null,
        this.props.history
      );
    }
    return null;
  };

  onEmailLogin = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.loginByEmail(email, password, this.props.history);
  };

  render() {
    // console.log('fb id: ', process.env.REACT_APP_FACEBOOK_APP_ID);
    return (
      <div className="loginForm">
        <br />
        <h3 className="text-center"> Login Form </h3>{' '}
        <div className="container">
          <form>
            <div className="form-group">
              <label> Email </label>{' '}
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={e => {
                  this.setState({
                    email: e.target.value
                  });
                }}
              />{' '}
            </div>{' '}
            <div className="form-group">
              <label> Password </label>{' '}
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={e => {
                  this.setState({
                    password: e.target.value
                  });
                }}
              />{' '}
            </div>{' '}
            <button
              className="btn btn-primary"
              onClick={e => this.onEmailLogin(e)}
            >
              Login{' '}
            </button>
          </form>
          <h4 className="text-center"> OR </h4>
          <br />
          <div className="text-center">
            <FacebookLogin
              appId={process.env.REACT_APP_FACEBOOK_APP_ID}
              autoLoad={false}
              fields="name,email,picture"
              onClick={this.componentClicked}
              callback={this.responseFacebook}
            />
            <br />
          </div>{' '}
        </div>{' '}
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
)(PureLogin);
