import React from 'react';
import aboutPhoto from '../../img/asset2.png';

class AboutUs extends React.Component {
  render() {
    return (
      <div
        className="jumbotron jumbotron-fluid aboutbanner"
        style={{ margin: 0 }}
      >
        <div className="container">
          <h1 className="display-4" style={{ color: '#9BCCD0' }}>
            About Us
          </h1>
          <h4 className="lead" style={{ color: '#9BCCD0' }}>
            We believe student queries should be answered in a timely manner
            <br /> to prevent snow-balling. CodeEasy is filling that gap in
            students'
            <br /> learning experience.
          </h4>

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
