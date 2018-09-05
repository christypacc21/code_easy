import React from 'react';
import codePhoto from '../../img/code.jpg';

const CARDS = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6'];

class Commun extends React.Component {
  render() {
    return (
      <div
        className="jumbotron jumbotron-fluid comBanner"
        style={{ margin: 0 }}
      >
        <div className="container">
          <div className="row ">
            <h3 className="display-4 wording" style={{ color: '#00b0af' }}>
              Top Questions
            </h3>
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
                    <h5 className="card-title" style={{ color: '#161515' }}>
                      How to define a Diagrams backend that combines several
                      primitive backends
                    </h5>
                    <p className="card-text" style={{ color: '#161515' }}>
                      I would like to make the same program use two different
                      Diagrams backends, notably diagrams-rasterific to generate
                      PNGs...
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

          <button type="button" className="btn btn-outline-info buttonAc">
            Go To Coding Community
          </button>
        </div>
      </div>
    );
  }
}

export default Commun;
