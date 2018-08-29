import React, { Component } from 'react';
import PostDetailsCard from './Fcomponents/PostDetailsCard';
import CommentList from './Fcomponents/CommentList';
import CommentForm from './Fcomponents/CommentForm';

class PostDetails extends Component {
  render() {
    return (
      <div>
        <div>postDetails</div>
        <a className="btn btn-primary ">Back to posts</a>
        <PostDetailsCard />
        <CommentList />
        <CommentForm />
      </div>
    );
  }
}

export default PostDetails;
