import React, { Component } from 'react';

class HomeTab extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              On Going
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              History
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default HomeTab;
