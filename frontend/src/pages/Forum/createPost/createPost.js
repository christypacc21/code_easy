// class component

import React, { Component } from 'react';

class CreatePost extends Component {
  render() {
    return (
      <div>
        <a className="btn btn-primary " href="/posts">
          Go back to posts
        </a>
        <div
          className="jumbotron jumbotron-fluid"
          style={{ margin: 0, background: '#00B0AF' }}
        >
          <div className="container">
            <div />
            <div className="row">
              <h2 style={{ color: 'white' }}>Create a Forum Post!</h2>
            </div>
            <div className="row">
              <h6 style={{ color: 'white' }}>
                Leave your question here and wait for reply, for free!
              </h6>
            </div>
            <form>
              <div className="form-group">
                <label htmlFor="inputDisplay">Post Title</label>
                <input
                  type="name"
                  className="form-control"
                  id="inputDisplay"
                  placeholder="Title"
                />
              </div>

              <h6>Upload image (or files) (if any):</h6>
              <div class="form-group">
                <input class="form-control" type="file" name="inputFile" />
              </div>

              <div className="form-group" />
              <label htmlFor="exampleFormControlTextarea1">Post Content</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Content"
                rows="9"
              />
            </form>

            <br />
            <a type="submit" className="btn btn-primary">
              Post to forum!
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePost;
