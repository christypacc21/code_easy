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
          Back to forum(posts)
        </a>

        <div className="jumbotron" style={{ margin: 0, background: '#D3D3D3' }}>
          <p>GET and Show individual post details card here</p>
          <PostDetailsCard />
        </div>

        <div className="jumbotron" style={{ margin: 0, background: '#00B0AF' }}>
          <p>GET and show CommentList here:</p>
          <CommentList />
          <CommentForm />
        </div>
      </div>
    );
  }
}

export default PostDetails;
