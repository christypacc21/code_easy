import React, { Component } from 'react';
import Select from 'react-select';
import { options } from './selectOptions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as UserActions from '../../redux/actions/userActions';
import Dropzone from 'react-dropzone';

class AskQuestion extends Component {
  state = {
    content: '',
    filePath: [],
    skills: []
  };

  onDrop = (acceptedFiles, rejectedFiles) => {
    this.setState({
      filePath: acceptedFiles
    });
  };

  render() {
    if (this.props.user && this.props.user.sQuestionCredit >= 1) {
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
    } else {
      return (
        <div
          className="container-fluid"
          style={{
            height: '65vh',
            padding: 80,
            background: '#00B0AF',
            color: 'white'
          }}
        >
          <div className="row">
            <div
              className="col-12"
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <h1>Oops, seems like you don't have enough question credit!</h1>
              <br />
            </div>
            <div
              className="col-12"
              style={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: 50
              }}
            >
              <Link to={`/pricing`} className="btn btn-primary">
                Check Out Our Pricing Here
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state, ownProps) {
  console.log('mapStateToProps - Ask Question', state);
  return {
    user: state.user.profile
  };
}

export default connect(
  mapStateToProps,
  UserActions
)(AskQuestion);
