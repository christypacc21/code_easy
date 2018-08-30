// class component
import React, { Component } from 'react';

class CreatePost extends Component {
  render() {
    return (
      <div>
        <div>createPost</div>
        <a className="btn btn-primary " href="/posts">
          Go back to posts
        </a>
      </div>
    );
  }
}

export default CreatePost;
