// class component
import React, { Component } from 'react';
import MyPostList from './myPostList';

class MyPostsPage extends Component {
  render() {
    return (
      <div className="jumbotron" style={{ margin: 0, background: '#00B0AF' }}>
        <MyPostList />
      </div>
    );
  }
}

export default MyPostsPage;
