import React, { Component } from 'react';
import { options } from './selectOptions';
import Select from 'react-select';
import { connect } from 'react-redux';
import * as UserActions from '../../redux/actions/userActions';
import Dropzone from 'react-dropzone'; // for upload file

class InstructorProfileForm extends Component {
  state = {
    introduction: '',
    education: '',
    yearCodeExp: 0,
    filePath: [],
    skills: []
  };

  //check role
  componentDidUpdate(prevProps) {
    // console.log('current props: ', this.props);
    if (
      this.props.instructor &&
      this.props.instructor !== prevProps.instructor
    ) {
      this.props.history.push('/TakeQuestions');
    }
  }
  // for upload file
  onDrop = (acceptedFiles, rejectedFiles) => {
    this.setState({
      filePath: acceptedFiles
    });
  };
  //data send to back end
  render() {
    const {
      introduction,
      education,
      yearCodeExp,
      filePath,
      skills
    } = this.state;

    // console.log('introduction: ', introduction);
    // console.log('edu: ', education);
    // console.log('year: ', yearCodeExp);
    // console.log('file: ', filePath);
    // console.log('skills: ', skills);

    return (
      <div
        className="jumbotron jumbotron-fluid"
        style={{ margin: 0, background: '#00B0AF' }}
      >
        <div className="container">
          <div className="row">
            <h2 style={{ color: 'white' }}>Hi, Instructor!</h2>
          </div>
          <div className="row">
            <h6 style={{ color: 'white' }}>
              We would love to know more about you!
            </h6>
          </div>
          <form>
            <div className="form-group" />
            <label htmlFor="exampleFormControlTextarea1">Introduction</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={introduction}
              onChange={e => {
                this.setState({ introduction: e.target.value });
              }}
            />
            <div className="form-group" />
            <label htmlFor="exampleFormControlTextarea2">Education</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea2"
              rows="3"
              value={education}
              onChange={e => {
                this.setState({ education: e.target.value });
              }}
            />
            <div className="form-group" />
            <label htmlFor="exampleFormControlSelect1">
              Year of coding experience
            </label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              value={yearCodeExp}
              onChange={e => this.setState({ yearCodeExp: e.target.value })}
            >
              <option value="0">&lt; 1</option>
              <option value="1">1 - 3 years</option>
              <option value="2">4 - 6 years</option>
              <option value="3">7 - 9 years</option>
              <option value="4">10 - 12 years</option>
              <option value="5">More than 12 years</option>
            </select>
            <div className="form-group" />
            <label htmlFor="exampleFormControlSelect2">Coding Skills</label>
            <Select
              isSearchable
              //save array
              isMulti
              value={skills}
              onChange={skills => this.setState({ skills })}
              options={options}
            />
            <div className="form-group" />
            <label htmlFor="exampleFormControlFile1">
              Upload certification
            </label>
            {/* file upload */}
            <Dropzone onDrop={this.onDrop}>
              <p>
                Try dropping an image here, or click to select an image to
                upload.
              </p>
            </Dropzone>
            <aside>
              <br />
              {this.state.filePath.length > 0 ? <h2>Uploaded file</h2> : null}

              <ul>
                {this.state.filePath.map(f => (
                  <li key={f.name}>
                    {f.name} - {f.size} bytes
                  </li>
                ))}
              </ul>
            </aside>
          </form>
          <br />
          <button
            className="btn btn-primary"
            onClick={() =>
              this.props.updateInstructorProfile(
                introduction,
                education,
                yearCodeExp,
                filePath,
                skills
              )
            }
          >
            Confirm
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    instructor: state.user.instructor
  };
}

export default connect(
  mapStateToProps,
  UserActions
)(InstructorProfileForm);
