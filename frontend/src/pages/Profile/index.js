import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
	render() {
		console.log('profile: ', this.props);
		return (
			<div className="container">
				{this.props.user && this.props.user.user && this.props.user.user.token}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
	};
}

export default connect(
	mapStateToProps,
	null,
)(Profile);
