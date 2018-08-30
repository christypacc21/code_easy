// func component
import React, { Component } from 'react';

class PostDetailsCard extends Component {
  render() {
    return (
      <div>
        <div className="card col-sm-12">
          <p>user propic</p>
          <p>username</p>
          <p>post Title</p>
          <p>post Image(/file) (if any)</p>
          <p>post DateTime</p>
          <p>post Content (Full)</p>
          <p>(no. of comments)</p>
        </div>
      </div>
    );
  }
}

export default PostDetailsCard;
