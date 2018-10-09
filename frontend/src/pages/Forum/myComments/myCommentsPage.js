// class component
import React, { Component } from 'react';
import MyCommentList from './myCommentList';
import ForumTab from './ForumTab';
import './myComments.css';

class MyCommentsPage extends Component {
  render() {
    return (
      <div>
        <ForumTab />
        <div className="jumbotron jumbotron-c">
          <h1 className="MyCommentsH1">
            My Comments - Comments that I have created
          </h1>
          <MyCommentList />
        </div>
      </div>
    );
  }
}

export default MyCommentsPage;
