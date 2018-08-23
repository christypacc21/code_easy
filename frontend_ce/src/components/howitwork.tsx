import * as React from "react";
import workPhoto from "../img/asset1.png";

class Howitwork extends React.Component {
  public render() {
    return (
      <div className="jumbotron jumbotron-fluid" style={{ margin: 0 }}>
        <div className="container">
          <h1 className="display-4">How it Works?</h1>
          <p className="lead">
            We believe student queries should be answered in a timely manner to
            prevent snow-balling. CodeEasy is filling that gap in students'
            learning experience.
          </p>
          <img className="work" style={{ width: "35%" }} src={workPhoto} />
        </div>
      </div>
    );
  }
}
export default Howitwork;
