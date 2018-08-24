import React from "react";
import codePhoto from "../../img/code.jpg";

const CARDS = ["card1", "card2", "card3", "card4", "card5", "card6"];

class Commun extends React.Component {
  render() {
    return (
      <div
        className="jumbotron jumbotron-fluid"
        style={{ margin: 0, background: "#00B0AF" }}
      >
        <div className="container">
          <div className="row">
            <h2 style={{ color: "white" }}>Top Questions</h2>
          </div>

          <div className="row">
            {CARDS.map(card => (
              <div key={card} className="col-sm-4">
                <div className="card">
                  <img
                    className="card-img-top codePhoto"
                    style={{}}
                    src={codePhoto}
                    alt="Code"
                  />

                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <br />
          <div className="row">
            <button type="button" className="btn btn-outline-light">
              Go To Coding Community
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Commun;
