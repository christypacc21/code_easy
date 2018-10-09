// class component
import React, { Component } from 'react';
import MyPostList from './myPostList';
import ForumTab from './ForumTab';

class MyPostsPage extends Component {
  render() {
    return (
      <div>
        <ForumTab />
        <div className="jumbotron jumbotron-c">
          <h1 className="MyCommentsH1">My Posts - Posts that I have created</h1>
          <MyPostList />
        </div>
      </div>
    );
  }
}

export default MyPostsPage;
