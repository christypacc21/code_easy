// class component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ForumActions from '../../../redux/actions/forumActions'; //?why not import the corresponding action only?
import Dropzone from 'react-dropzone';
import { withRouter } from 'react-router-dom';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentContent: '',
      filePath: []
    };
  }

  onDrop = (acceptedFiles, rejectedFiles) => {
    this.setState({
      filePath: acceptedFiles
    });
    console.log(this.state);
  };

  render() {
    const { commentContent, filePath } = this.state;
    return (
      <div
        className="jumbotron jumbotron-fluid"
        style={{ margin: 0, background: '#00B0AF' }}
      >
        <div
          className="container"
          style={{ background: '#D3D3D3', borderRadius: '0.8em' }}
        >
          <h2 style={{ color: 'Black', paddingTop: '15px' }}>Your comments:</h2>
          <form>
            <div className="form-group" />
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Type something..."
              value={this.state.commentContent}
              onChange={event =>
                this.setState({ commentContent: event.target.value })
              }
              rows="9"
            />
            <div className="form-group">
              <label
                htmlFor="exampleFormControlFile1"
                style={{ fontSize: '30px' }}
              >
                Upload Image (if any)
              </label>
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
                      {f.name}
                      {/* - {f.size} bytes */}
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
          </form>

          <br />

          <button
            className="btn btn-dark btn-lg btn-block"
            onClick={() => {
              this.props.createComment(
                commentContent,
                filePath,
                this.props.paramsId
                //the params' names do i need to refer to somewhere?(ying goy not)
              );
              this.setState({ commentContent: '', filePath: [] });
              window.location.reload();
              // this.props.onCommentSubmit();
            }}
          >
            Send !
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    ForumActions
  )(CommentForm)
);
