import React from 'react';
// import aboutPhoto from '../../img/asset2.png';
import workPhoto from '../../img/asset1.png';
import './Home.css';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="aboutUsDiv">
        <div className="flexA">
          <div className="flexB">
            <div>
              <p className="headings">About Us</p>
            </div>
            <div>
              <p className="abtUsContent">
                We believe student queries should be answered in a timely manner
                to prevent snow-balling.
              </p>
              <p className="abtUsContent">
                CodeEasy is filling that gap in students' learning experience.
              </p>
              <p className="abtUsContent">
                ~ Teach to gain | Exchange knowledge to grow ~
              </p>
            </div>
          </div>
          <img className="aboutUsImg" src={workPhoto} alt="How it works?" />
        </div>
      </div>
    );
  }
}
export default AboutUs;
