import React from 'react';
import aboutPhoto from '../../img/asset2.png';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid" style={{ margin: 0 }}>
        <div className="container">
          <h1 className="display-4">About Us</h1>
          <p className="lead">
            We believe student queries should be answered in a timely manner to
            prevent snow-balling. CodeEasy is filling that gap in students'
            learning experience.
          </p>
          <img
            className="about"
            style={{ width: '35%' }}
            src={aboutPhoto}
            alt="About Us"
          />
        </div>
      </div>
    );
  }
}
export default AboutUs;
