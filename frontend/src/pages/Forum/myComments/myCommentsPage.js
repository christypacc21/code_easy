// class component
import React, { Component } from 'react';
import MyCommentList from './myCommentList';
import ForumTab from './ForumTab';

class MyCommentsPage extends Component {
  render() {
    return (
      <div>
        <ForumTab />
        <div className="jumbotron" style={{ margin: 0, background: '#00B0AF' }}>
          <h1 style={{ color: 'white' }}>
            My Comments - Comments that I have created
          </h1>
          <MyCommentList />
        </div>
      </div>
    );
  }
}

export default MyCommentsPage;
