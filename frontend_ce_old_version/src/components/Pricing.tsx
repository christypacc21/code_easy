import * as React from "react";

class Pricing extends React.Component {
  public render() {
    return (
      <div
        className="jumbotron jumbotron-fluid"
        style={{ margin: 0, background: "#00B0AF" }}
      >
        <div className="container">
          <div className="row">
            <h2 style={{ color: "white" }}>Pricing</h2>
            <p>
              We believe student queries should be answered in a timely manner
              to prevent snow-balling. CodeEasy is filling that gap in students'
              learning experience.
            </p>
          </div>

          <div className="card" style={{}}>
            <div className="card-body col-sm-4">
              <h5 className="card-title">Get started Pack</h5>
              <p className="card-text">
                1 question:Some quick example text to build on the card title
                and make up the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Purchase Now
              </a>
            </div>
          </div>

          <div className="card" style={{}}>
            <div className="card-body col-sm-4">
              <h5 className="card-title">Get started Pack</h5>
              <p className="card-text">
                1 question:Some quick example text to build on the card title
                and make up the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Purchase Now
              </a>
            </div>
          </div>

          <div className="card" style={{}}>
            <div className="card-body col-sm-4">
              <h5 className="card-title">Get started Pack</h5>
              <p className="card-text">
                1 question:Some quick example text to build on the card title
                and make up the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Purchase Now
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Pricing;
