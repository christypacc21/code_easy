import * as React from "react";
import FacebookLogin, { ReactFacebookLoginInfo } from "react-facebook-login";
import { connect } from "react-redux";
import { loginFacebook } from "../redux/auth/actions";

interface ILoginProps {
  loginFacebook: (accessToken: string) => Promise<void>;
}

class PureLogin extends React.Component<ILoginProps, {}> {
  public componentClicked() {
    return null;
  }

  public responseFacebook = (
    userInfo: ReactFacebookLoginInfo & { accessToken: string }
  ) => {
    if (userInfo.accessToken) {
      this.props.loginFacebook(userInfo.accessToken);
    }
    return null;
  };

  public render() {
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

export const Login = connect(
  () => ({}),
  dispatch => ({
    loginFacebook: (accessToken: string) => dispatch(loginFacebook(accessToken))
  })
)(PureLogin);
