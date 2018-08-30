import React, { Component } from 'react';
import React from 'react';

class CreateQuestion extends React.Component {
  render() {
    return (
      <div
        className="jumbotron jumbotron-fluid"
        style={{ margin: 0, background: '#00B0AF' }}
      >
        <div className="container">
          <h1 className="display-4">My Question</h1>
          <a className="btn btn-primary " href="/">
            Ask Question Now!
          </a>
        </div>
      </div>
    );
  }
}
export default CreateQuestion;
