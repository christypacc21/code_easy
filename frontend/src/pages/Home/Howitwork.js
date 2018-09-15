import React from 'react';
import './Home.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="howItWorks ">
        <div>
          <p className="howItWorksHead">How it Works?</p>
        </div>
        <div className="howItWorksContent">
          <div>
            <p>
              1-1 Live Chat : Price Plan, instant and interative tutors'
              consulatation.
            </p>
          </div>
          <div>
            <p>
              Forum : A completely FREE community that allows knowledge exchange
              between coders.
            </p>
          </div>
          <div>
            <p>~ Teach to gain | Exchange knowledge to grow ~</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
