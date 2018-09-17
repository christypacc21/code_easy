import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ForumTab extends Component {
  render() {
    return (
      <div>
        {this.props.user.authenticated ? (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link active" to="/posts">
                  Forum
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/myposts">
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
        ) : (
          <div />
        )}
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
  null
)(ForumTab);
