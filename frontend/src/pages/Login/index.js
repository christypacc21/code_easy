import React from 'react';
// import FacebookLogin, { ReactFacebookLoginInfo } from "react-facebook-login";
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';

import * as UserActions from '../../actions/userActions';

// import { loginFacebook } from "../redux/auth/actions";

class PureLogin extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			login: '',
			password: ''
		};
	}

	componentClicked() {
		return null;
	}

	responseFacebook = userInfo => {
		if (userInfo.accessToken) {
			this.props.loginFacebook(userInfo.accessToken);
		}
		return null;
	};

	onEmailLogin = e => {
		e.preventDefault();
		console.log('logging in by email/password...');
		const { email, password } = this.state;
		console.log('email: ', email);
		console.log('password: ', password);
		this.props.loginByEmail(email, password);
	};

	render() {
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

						<button
							className="btn btn-primary"
							onClick={() => this.props.logout()}
						>
							Logout
						</button>
					</form>
					<h4 className="text-center"> OR </h4>
					<div className="text-center">
						<FacebookLogin
							appId={process.env.REACT_APP_FACEBOOK_APP_ID || ''}
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
	UserActions
)(PureLogin);
