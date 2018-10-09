// class component
import React, { Component } from 'react';
import PostCardList from './PostCardList';
import ForumTab from './ForumTab';

class PostsPage extends Component {
  render() {
    console.log('props' + this.props);
    return (
      <div>
        <ForumTab />
        <div className="jumbotron" style={{ margin: 0, background: '#00B0AF' }}>
          <PostCardList />
        </div>
      </div>
    );
  }
}

export default PostsPage;
