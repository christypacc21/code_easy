//func component
import React, { Component } from 'react';
import PostDetailsCard from './PostDetailsCard';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class PostDetails extends Component {
  render() {
    return (
      <div>
        <a className="btn btn-primary " href="/posts">
          Back to posts
        </a>
        <PostDetailsCard />
        <div className="jumbotron" style={{ margin: 0, background: '#00B0AF' }}>
          <p>CommentList here:</p>
          <CommentList />
          <CommentForm />
        </div>
      </div>
    );
  }
}

export default PostDetails;
