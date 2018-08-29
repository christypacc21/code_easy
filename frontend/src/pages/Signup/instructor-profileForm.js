import React, { Component } from 'react';
import MultipleSelect from './MultipleSelect';
// import MultipleSelect from './MultipleSelect';

class InstructorProfileForm extends Component {
  render() {
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
            <label for="exampleFormControlTextarea1">Introduction</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            />

            <div className="form-group" />
            <label for="exampleFormControlTextarea1">Education</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            />

            <div className="form-group" />
            <label for="exampleFormControlSelect1">
              Year of coding experience
            </label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option> &lt;1 </option>
              <option>1-3 Years</option>
              <option>4-6 Years</option>
              <option>7-10 Years</option>
              <option>10-13 Years</option>
              <option>more than 13 years</option>
            </select>

            <div className="form-group" />
            <label for="exampleFormControlSelect1">Coding Skills</label>
            <MultipleSelect />

            <div className="form-group" />
            <label for="exampleFormControlFile1">Upload certification</label>
            <input
              type="file"
              class="form-control"
              id="exampleFormControlFile1"
              placeholder="UploadCertification"
            />
          </form>

          <br />
          <button type="submit" class="btn btn-primary" href="/">
            Confirm
          </button>
        </div>
      </div>
    );
  }
}

export default InstructorProfileForm;
