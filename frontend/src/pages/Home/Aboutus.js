import React from 'react';
// import aboutPhoto from '../../img/asset2.png';
import workPhoto from '../../img/asset1.png';

class AboutUs extends React.Component {
  render() {
    return (
      <div
        className="jumbotron jumbotron-fluid aboutbanner"
        style={{ margin: 0 }}
      >
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col">
              <h1 className="display-4" style={{ color: '#ffffff' }}>
                About Us
              </h1>
              <h4 className="lead" style={{ color: '#ffffff' }}>
                We believe student queries should be answered in a timely manner
                to prevent snow-balling. CodeEasy is filling that gap in
                students' learning experience.
              </h4>
            </div>
            <div className="col">
              {/* <img
                className="about"
                style={{ width: '50%' }}
                src={aboutPhoto}
                alt="About Us"
              /> */}
              <img
                className="work"
                style={{ width: '78%' }}
                src={workPhoto}
                alt="How it works?"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutUs;
