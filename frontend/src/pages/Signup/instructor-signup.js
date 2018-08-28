import React, { Component } from 'react';

class InstructorSignup extends Component {
	render() {
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
				</div>
			</div>
		);
	}
}

export default InstructorSignup;
