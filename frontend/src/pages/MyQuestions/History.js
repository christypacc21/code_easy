import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HistoryList from './HistoryList';

class Ongoing extends Component {
  render() {
    return (
      <div>
        <div style={{ paddingLeft: 80, margin: 0, background: '#00B0AF' }}>
          <br />
          <h1 className="display-4" style={{ margin: 0 }}>
            My Question
          </h1>
          <br />
          <Link className="btn btn-primary " to="/AskQuestion">
            Ask Question Now!
          </Link>
          <br />
          <br />
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link className="nav-link" to="/my-questions/ongoing">
                On Going
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/my-questions/history">
                History
              </Link>
            </li>
          </ul>
        </nav>
        <HistoryList />
      </div>
    );
  }
}

export default Ongoing;
