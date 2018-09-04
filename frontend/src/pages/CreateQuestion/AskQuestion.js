import React, { Component } from 'react';
import Select from 'react-select';
import { options } from './selectOptions';
import { connect } from 'react-redux';
import * as UserActions from '../../redux/actions/userActions';
import Dropzone from 'react-dropzone';

class AskQuestion extends Component {
  state = {
    content: '',
    filePath: [],
    skills: []
  };

  // componentDidUpdate(prevProps) {

  //   if (
  //     this.props.instructor &&
  //     this.props.instructor !== prevProps.instructor
  //   ) {
  //     this.props.history.push('/chat');
  //   }
  // }

  onDrop = (acceptedFiles, rejectedFiles) => {
    this.setState({
      filePath: acceptedFiles
    });
  };
  render() {
    const { content, filePath, skills } = this.state;
    return (
      <div
        className="jumbotron jumbotron-fluid"
        style={{ margin: 0, background: '#00B0AF' }}
      >
        <div className="container">
          <div className="row">
            <h2 style={{ color: 'white' }}>Ask Question</h2>
          </div>

          <form>
            <div className="form-group" />
            <label htmlFor="exampleFormControlSelect2">Coding Skills</label>
            <Select
              isSearchable
              isMulti
              value={skills}
              onChange={skills => this.setState({ skills })}
              options={options}
            />

            <div className="form-group" />
            <label htmlFor="exampleFormControlTextarea1">
              Question Content
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={content}
              onChange={e => {
                this.setState({ content: e.target.value });
              }}
            />

            <div className="form-group" />
            <label htmlFor="exampleFormControlFile1">Upload Image</label>
            <Dropzone onDrop={this.onDrop}>
              <p>
                Try dropping an image here, or click to select an image to
                upload.
              </p>
            </Dropzone>
            <aside>
              <br />
              {this.state.filePath.length > 0 ? <h2>Uploaded Image</h2> : null}

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
          </form>

          <br />
          <button
            className="btn btn-primary"
            onClick={() =>
              this.props.uploadQuestion(
                content,
                filePath,
                skills,
                this.props.history
              )
            }
          >
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  UserActions
)(AskQuestion);
