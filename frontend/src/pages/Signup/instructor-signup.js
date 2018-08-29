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
          <form>
            <button type="Facebook" class="btn btn-primary">
              Facebook Login
            </button>
            <div className="form-group" />
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
            <div className="form-group" />
            <label for="exampleInputPassword">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
            <div className="form-group" />
            <label for="exampleInputUserName">Username</label>
            <input
              type="name"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Username"
            />
          </form>
          <a
            type="submit"
            class="btn btn-primary"
            href="/instructor-profileForm"
          >
            Submit
          </a>
        </div>
      </div>
    );
  }
}

export default InstructorSignup;
