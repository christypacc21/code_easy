import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as UserActions from '../../redux/actions/userActions';

class UserSignup extends Component {
  state = {
    email: '',
    displayName: '',
    password: '',
    role: 'student'
  };

  componentDidUpdate(prevProps) {
    if (this.props.user && this.props.user !== prevProps.user) {
      this.props.history.push('/profile');
    }
  }

  render() {
    const { displayName, email, password, role } = this.state;

    return (
      <div
        className="jumbotron jumbotron-fluid"
        style={{ margin: 0, background: '#00B0AF' }}
      >
        <div className="container">
          <div className="row">
            <h2 style={{ color: 'white' }}>Hi, User!</h2>
          </div>
          <div className="row">
            <h6 style={{ color: 'white' }}>
              Please fill all information below
            </h6>
          </div>
          <form>
            <button type="Facebook" className="btn btn-primary">
              Facebook Login
            </button>
            <div className="form-group">
              <label htmlFor="exampleInputUserName">Display Name</label>
              <input
                type="name"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Username"
                value={displayName}
                onChange={e => this.setState({ displayName: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </div>
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
            <div className="form-group">
              <label htmlFor="exampleInputPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={e => this.setState({ password: e.target.value })}
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
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  UserActions
)(UserSignup);
