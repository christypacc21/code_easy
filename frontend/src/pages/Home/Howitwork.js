import React from 'react';
import workPhoto from '../../img/asset1.png';

class Howitwork extends React.Component {
  render() {
    return (
      <div
        className="jumbotron jumbotron-fluid bannerHow "
        style={{ margin: 0 }}
      >
        <div className="container ">
          <div class="row">
            <h1 className="display-4 col" style={{ color: '#9BCCD0' }}>
              How it Works?
            </h1>
            <p className="lead col" style={{ color: '#9BCCD0' }}>
              We believe student queries should be answered in a timely manner
              to prevent snow-balling. CodeEasy is filling that gap in students'
              learning experience.
            </p>
          </div>

          {/* <img
            className="work"
            style={{ width: '35%' }}
            src={workPhoto}
            alt="How it works?"
          /> */}
        </div>
      </div>
    );
  }
}
export default Howitwork;
