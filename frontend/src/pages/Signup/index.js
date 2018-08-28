import React, { Component } from 'react';

class Signup extends Component {
	render() {
		return (
			<div
				className="jumbotron jumbotron-fluid"
				style={{ margin: 0, background: '#00B0AF' }}
			>
				<div className="container">
					<div className="row">
						<h2 style={{ color: 'white' }}>Sign up now!</h2>
					</div>
					<div className="row">
						<h6 style={{ color: 'white' }}>Choose your role first!</h6>
					</div>

					<div className="row">
						<div className="card col-sm-4" style={{}}>
							<div className="card-body">
								<h5 className="card-title">Instructor</h5>
								<a className="btn btn-primary " href="/instuctor-signup">
									Sign up now
								</a>
							</div>
						</div>

						<div className="card col-sm-4" style={{}}>
							<div className="card-body">
								<h5 className="card-title">User</h5>
								<a className="btn btn-primary " href="/user-signup">
									Sign up now
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Signup;
