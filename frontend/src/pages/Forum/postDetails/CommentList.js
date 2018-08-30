// class component
import React, { Component } from 'react';
import CommentCard from './CommentCard';

class CommentList extends Component {
  render() {
    return (
      <div className="CommentList">
        <div className="row">
          <div className="card col-sm-6">
            <CommentCard />
          </div>
          <div className="card col-sm-6">
            <CommentCard />
          </div>
          <div className="card col-sm-6">
            <CommentCard />
          </div>
          <div className="card col-sm-6">
            <CommentCard />
          </div>
        </div>
      </div>
    );
  }
}

export default CommentList;
