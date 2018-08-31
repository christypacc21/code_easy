import React, { Component } from 'react';
import Select from 'react-select';
import { options } from './selectOptions';
import ImageUploader from 'react-images-upload';

class AskQuestion extends Component {
  render() {
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
            <Select isSearchable isMulti options={options} />

            <div className="form-group" />
            <label htmlFor="exampleFormControlTextarea2">Question</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea2"
              rows="3"
            />

            <div className="form-group" />
            <label htmlFor="exampleFormControlFile1">
              Upload certification{' '}
            </label>
            <ImageUploader
              withPreview
              withIcon={true}
              buttonText="Choose images"
              onChange={this.onDrop}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={123242880}
            />
          </form>

          <br />
          <button className="btn btn-primary">Confirm</button>
        </div>
      </div>
    );
  }
}

export default AskQuestion;
