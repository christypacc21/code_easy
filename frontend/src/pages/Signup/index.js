import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
  render() {
    return (
      <div
        className="jumbotron jumbotron-fluid"
        style={{
          height: '65vh',
          margin: 0,
          paddingLeft: 15,
          paddingRight: 15,
          background: '#00B0AF'
        }}
      >
        <div className="container">
          <div className="row">
            <h1 style={{ color: 'white' }}>Sign up now!</h1>
          </div>
          <br />
          <div className="row">
            <h5 style={{ color: 'white' }}>Choose your role first!</h5>
          </div>
          <br />
          <div className="row">
            <div className="card col-sm-4" style={{}}>
              <div className="card-body">
                <h4 className="card-title">Student</h4>
                <Link className="btn btn-primary " to="/user-signup">
                  Sign up now
                </Link>
              </div>
            </div>

            <div className="card col-sm-4" style={{}}>
              <div className="card-body">
                <h4 className="card-title">Instructor</h4>
                <Link className="btn btn-primary " to="/instuctor-signup">
                  Sign up now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
