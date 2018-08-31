// func component
import React, { Component } from 'react';

class CommentCard extends Component {
  render() {
    return (
      <div>
        <div>
          <p>user propic </p>
          <p>username</p>
          <p>comment DateTime</p>
          <p>comment Content</p>
          <p>comment Image (or files) (image_path)(if any)</p>
          {/* <form
            action="/posts/{{post_id}}/comments/{{id}}?_method=DELETE"
            method="post"
            style="float:right"
          > */}
          {/* <button class="btn btn-danger btn-sm">Delete advice</button> */}
          {/* </form> */}
        </div>
      </div>
    );
  }
}

export default CommentCard;
