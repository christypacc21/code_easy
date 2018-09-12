import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ForumTab extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link " to="/posts">
              Forum
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/myposts">
              MyPosts
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/mycomments">
              MyComments
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default ForumTab;
