// class component

import React, { Component } from 'react';

class CommentForm extends Component {
  render() {
    return (
      <div
        className="jumbotron jumbotron-fluid"
        style={{ margin: 0, background: '#00B0AF' }}
      >
        <div className="container" style={{ background: '#000000' }}>
          {/* <div className="row"> */}
          <h2 style={{ color: 'white' }}>Your comments:</h2>
          {/* </div> */}
          {/* <div className="row">
            <h6 style={{ color: 'white' }}>Leave your comments here!</h6>
          </div> */}
          <form>
            <div className="form-group" />
            {/* <label htmlFor="exampleFormControlTextarea1">My reply:</label> */}
            {/* can upload more than one file or image??? */}
            <h6>Upload image or files (if any):</h6>
            <div class="form-group">
              <input class="form-control" type="file" name="inputFile" />
            </div>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Type something..."
              rows="9"
            />
          </form>
          <br />
          <a type="submit" className="btn btn-primary">
            Send
          </a>
        </div>
      </div>
    );
  }
}

export default CommentForm;
