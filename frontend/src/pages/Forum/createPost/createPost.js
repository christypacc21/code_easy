// class component
// version 2 can add select skills option
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ForumActions from '../../../redux/actions/forumActions'; //?why not import the corresponding action only?
import Dropzone from 'react-dropzone';
import { Link, withRouter } from 'react-router-dom';

class CreatePost extends Component {
  state = {
    postTitle: '',
    postContent: '',
    filePath: []
  };

  //?
  onDrop = (acceptedFiles, rejectedFiles) => {
    this.setState({
      filePath: acceptedFiles
    });
    console.log(this.state);
  };
  render() {
    const { postTitle, postContent, filePath } = this.state;

    return (
      <div>
        <Link className="btn btn-primary " to="/posts">
          Go back to posts
        </Link>
        <div
          className="jumbotron jumbotron-fluid"
          style={{ margin: 0, background: '#00B0AF' }}
        >
          <div className="container">
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
                  onChange={pt => this.setState({ postTitle: pt.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Upload Image</label>
                <Dropzone onDrop={this.onDrop}>
                  <p>
                    Try dropping an image here, or click to select an image to
                    upload.
                  </p>
                </Dropzone>
                <aside>
                  <br />
                  {this.state.filePath.length > 0 ? (
                    <h2>Uploaded Image</h2>
                  ) : null}

                  <ul>
                    {this.state.filePath.map(f => (
                      <li key={f.name}>
                        {f.name} - {f.size} bytes
                        <button
                          className="btn btn-danger"
                          onClick={() => this.setState({ filePath: [] })}
                        >
                          Delete this file
                        </button>
                      </li>
                    ))}
                  </ul>
                </aside>
              </div>

              <br />
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Post Content
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Content"
                  rows="9"
                  value={postContent}
                  onChange={pc =>
                    this.setState({ postContent: pc.target.value })
                  }
                />
              </div>
            </form>

            <br />
            {/* whts the dif between using a , button and input here? */}
            <button
              // type="submit"
              className="btn btn-primary"
              onClick={
                () =>
                  this.props
                    .createPost(postTitle, postContent, filePath)
                    .then(() => {
                      this.props.history.goBack();
                    }) //the params' names do i need to refer to somewhere?(ying goy not)
              }
            >
              Post to forum!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    ForumActions
  )(CreatePost)
);
