import * as React from "react";

class AboutUs extends React.Component {
  public render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">About Us</h1>
          <p className="lead">
            We believe student queries should be answered in a timely manner to
            prevent snow-balling. CodeEasy is filling that gap in students'
            learning experience.
          </p>
        </div>
      </div>
    );
  }
}
export default AboutUs;
