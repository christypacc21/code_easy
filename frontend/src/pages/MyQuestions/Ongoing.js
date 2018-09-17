import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import OngoingList from './OngoingList';
import './MyQ.css';

class Ongoing extends Component {
  render() {
    return (
      <div>
        <div className="pageHeadDiv">
          <br />
          <h1 className="display-4">
            {this.props.role === 'instructor' ? 'My Answer' : 'My Question'}
          </h1>
          <br />
          {this.props.role === 'instructor' ? (
            <div />
          ) : (
            <Link className="btn btn-primary " to="/AskQuestion">
              Ask Question Now!
            </Link>
          )}
        </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link className="nav-link active" to="/my-questions/ongoing">
                On Going
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/my-questions/history">
                History
              </Link>
            </li>
          </ul>
        </nav>
        <OngoingList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    role: state.user.profile.role
  };
}
export default connect(
  mapStateToProps,
  null
)(Ongoing);
