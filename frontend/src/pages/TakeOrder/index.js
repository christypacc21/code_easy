import React from 'react';
import HomeTab from '../CreateQuestion/HomeTab';

class TakeOder extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="jumbotron jumbotron-fluid"
          style={{ margin: 0, background: '#00B0AF' }}
        >
          <div className="container">
            <div className="row">
              <h2 style={{ color: 'white' }}>Take Order</h2>
            </div>
            <br />
            <div className="row">
              <button type="button" className="btn btn-outline-light">
                Go To Coding Community
              </button>
            </div>
          </div>
        </div>
        <HomeTab />
      </React.Fragment>
    );
  }
}

export default TakeOrder;
