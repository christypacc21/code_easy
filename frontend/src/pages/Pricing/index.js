import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Pricing extends React.Component {
  onToken = token => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  render() {
    return (
      <div
        className="jumbotron jumbotron-fluid"
        style={{ margin: 0, background: '#00B0AF' }}
      >
        <div className="container">
          <div className="row">
            <h2 style={{ color: 'white' }}>Pricing</h2>
            <p>
              We believe student queries should be answered in a timely manner
              to prevent snow-balling. CodeEasy is filling that gap in students'
              learning experience.
            </p>
          </div>

          <div className="row">
            <div className="card col-sm-4" style={{}}>
              <div className="card-body">
                <h5 className="card-title">Get started Pack</h5>
                <p className="card-text">
                  1 question:Some quick example text to build on the card title
                  and make up the bulk of the card's content. <br />
                </p>
                <h1>$1000.00HKD</h1>
                <StripeCheckout
                  token={this.onToken}
                  stripeKey="pk_test_iFPuRXZV4aamZtNYpzHuqijR"
                >
                  <button className="btn btn-primary">Purchase Now</button>
                </StripeCheckout>
              </div>
            </div>

            <div className="card col-sm-4" style={{}}>
              <div className="card-body">
                <h5 className="card-title">3 Questions Pack</h5>
                <p className="card-text">
                  1 question:Some quick example text to build on the card title
                  and make up the bulk of the card's content.
                </p>
                <h1>$1000.00HKD</h1>
                <StripeCheckout
                  token={this.onToken}
                  stripeKey="pk_test_iFPuRXZV4aamZtNYpzHuqijR"
                >
                  <button className="btn btn-primary">Purchase Now</button>
                </StripeCheckout>
              </div>
            </div>

            <div className="card col-sm-4" style={{}}>
              <div className="card-body">
                <h5 className="card-title">10 Questions Pack</h5>
                <p className="card-text">
                  1 question:Some quick example text to build on the card title
                  and make up the bulk of the card's content.
                </p>
                <h1>$1000.00HKD</h1>
                <StripeCheckout
                  token={this.onToken}
                  stripeKey="pk_test_iFPuRXZV4aamZtNYpzHuqijR"
                >
                  <button className="btn btn-primary">Purchase Now</button>
                </StripeCheckout>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Pricing;
