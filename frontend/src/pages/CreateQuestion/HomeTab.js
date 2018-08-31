import React, { Component } from 'react';

class HomeTab extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link active" href="/">
              On Going
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">
              History
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default HomeTab;
