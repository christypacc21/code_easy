// class component
import React, { Component } from 'react';
import MyPostList from './myPostList';

class MyPostsPage extends Component {
  render() {
    return (
      <div className="jumbotron" style={{ margin: 0, background: '#00B0AF' }}>
        <h1 style={{ color: 'white' }}>My Posts - Posts that I have created</h1>
        <MyPostList />
      </div>
    );
  }
}

export default MyPostsPage;
