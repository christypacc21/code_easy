// class component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ForumActions from '../../../redux/actions/forumActions'; //?why not import the corresponding action only?
import Dropzone from 'react-dropzone';

class CommentForm extends Component {
  state = {
    commentContent: '',
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
    const { commentContent, filePath } = this.state;
    return (
      <div
        className="jumbotron jumbotron-fluid"
        style={{ margin: 0, background: '#00B0AF' }}
      >
        <div className="container" style={{ background: '#D3D3D3' }}>
          <h2 style={{ color: 'white' }}>Your comments:</h2>
          <form>
            <div className="form-group" />
            {/* <label htmlFor="exampleFormControlTextarea1">My reply:</label> */}
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Type something..."
              rows="9"
            />
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
            {/* <input
              type="submit"
              class="btn btn-primary btn-sm btn-block"
              value="send"
            /> */}
          </form>

          <br />
          <button
            // type="submit"
            className="btn btn-primary btn-lg btn-block"
            onClick={
              () => this.props.createComment(commentContent, filePath) //the params' names do i need to refer to somewhere?(ying goy not)
            }
          >
            Send !
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  ForumActions
)(CommentForm);
