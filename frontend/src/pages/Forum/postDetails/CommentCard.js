// func component
import React, { Component } from 'react';

class CommentCard extends Component {
  render() {
    return (
      <div>
        <div>
          <p>user propic </p>
          <p>username</p>
          <p>comment dateTime</p>
          <p>comment content</p>
          <p>image or files (image_path)(if any)</p>
        </div>
      </div>
    );
  }
}

export default CommentCard;
