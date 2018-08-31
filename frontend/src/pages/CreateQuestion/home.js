import React, { Component } from 'react';
import HomeTab from './HomeTab';

class CreateQuestion extends Component {
  render() {
    return (
      <div
        className="jumbotron jumbotron-fluid"
        style={{ margin: 0, background: '#00B0AF' }}
      >
        <div className="container">
          <h1 className="display-4">My Question</h1>
          <a className="btn btn-primary " href="/AskQuestion">
            Ask Question Now!
          </a>
        </div>

        <HomeTab />
      </div>
    );
  }
}
export default CreateQuestion;
