// class component

import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as ForumActions from '../../../redux/actions/forumActions';

class CreatePost extends Component {
  state = {
    postTitle: '',
    postContent: ''
  };

  render() {
    const { postTitle, postContent } = this.state;

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
                  value={postTitle}
                  onChange={e => this.setState({ postTitle: e.target.value })}
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
                value={postContent}
                onChange={e => this.setState({ postContent: e.target.value })}
              />
            </form>

            <br />
            <a
              type="submit"
              className="btn btn-primary"
              // onClick={()=> this.props.}
            >
              Post to forum!
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePost;
