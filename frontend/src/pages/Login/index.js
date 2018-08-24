import React from "react";
// import FacebookLogin, { ReactFacebookLoginInfo } from "react-facebook-login";
import FacebookLogin from "react-facebook-login";
import { connect } from "react-redux";
// import { loginFacebook } from "../redux/auth/actions";

class PureLogin extends React.Component {
  componentClicked() {
    return null;
  }

  responseFacebook = (
    userInfo
    // userInfo: ReactFacebookLoginInfo & { accessToken: string }
  ) => {
    if (userInfo.accessToken) {
      this.props.loginFacebook(userInfo.accessToken);
    }
    return null;
  };

  render() {
    return (
      <div>
        <h3 className="text-center">Login Form</h3>
        <div className="container">
          <form>
            <div className="form-group">
              <label>Email</label>
              <input type="text" name="email" className="form-control" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" className="form-control" />
            </div>
            <input type="submit" value="Submit" className="btn btn-primary" />
          </form>
          <h4 className="text-center"> OR </h4>
          <div className="text-center">
            <FacebookLogin
              appId={process.env.REACT_APP_FACEBOOK_APP_ID || ""}
              autoLoad={true}
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

// export default connect(dispatch => ({
//   loginFacebook: accessToken => dispatch(loginFacebook(accessToken))
// }))(PureLogin);

export default connect(
  null,
  null
)(PureLogin);
