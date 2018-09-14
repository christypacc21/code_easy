import React from 'react';
// import workPhoto from '../../img/asset1.png';

class Howitwork extends React.Component {
  render() {
    return (
      <div
        className="jumbotron jumbotron-fluid bannerHow "
        style={{ margin: 0 }}
      >
        <div className="container ">
          <h1 className="display-4 " style={{ color: '#ffffff' }}>
            How it Works?
          </h1>
          <p className="lead " style={{ color: '#ffffff' }}>
            We believe student queries should be answered in a timely manner to
            prevent snow-balling. CodeEasy is filling that gap in students'
            learning experience. ~ Pay to save time | Teach to earn ~
          </p>
        </div>

        {/* <img
            className="work"
            style={{ width: '35%' }}
            src={workPhoto}
            alt="How it works?"
          /> */}
      </div>
    );
  }
}
export default Howitwork;
