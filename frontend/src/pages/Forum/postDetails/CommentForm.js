// class component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ForumActions from '../../../redux/actions/forumActions';
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

  reload() {
    this.props.onRequestPostDetails(this.props.paramsId);
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
              );
              this.setState({ commentContent: '', filePath: [] });
              alert('Comment posted successfully!');
              this.reload();
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
