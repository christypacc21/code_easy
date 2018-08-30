// class component
import React, { Component } from 'react';
import CommentCard from './CommentCard';

class CommentList extends Component {
  render() {
    return (
      <div>
        <CommentCard />
      </div>
    );
  }
}

export default CommentList;
