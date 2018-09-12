import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const SERVER_URL = process.env.REACT_APP_API_SERVER;
const STRIPE_PUBLISHABLE_KEY = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
const jwtToken = localStorage.getItem('token');

class Pricing extends React.Component {
  onToken = (description, amount) => token => {
    console.log('description+amount+token: ', description, amount, token);
    fetch(SERVER_URL + '/api/payment/charge', {
      method: 'POST',
      body: JSON.stringify({ description, amount, token }),
      headers: {
        Authorization: 'Bearer ' + jwtToken,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        response.json().then(data => {
          console.log('data', data);
          if (data.success) {
            alert(
              `Thank you. Your payment has been processed. Here are the details of this transaction for your reference - Invoice Number: ${
                data.receipt
              } | Amount Paid: HK$${data.amount /
                100} | Remaining Question Credit: ${data.totalQuestionCredits}`
            );
          } else {
            alert(`Payment Error: ${data.message}. Please contact us.`);
          }
        });
      })
      .catch(err =>
        alert(`Payment Error: ${err.response.data}. Please contact us.`)
      );
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
              learning experience. For fairness, each question's maximum live
              chat duration is supposed to be 15 minutes.
            </p>
          </div>

          <div className="row">
            <div className="card col-sm-4" style={{}}>
              <div className="card-body">
                <h5 className="card-title">Get Started Pack</h5>
                <div style={{ marginBottom: 55, marginTop: 55 }}>
                  <h2 className="card-text">
                    1 Question <br />
                  </h2>
                  <p className="card-text">
                    TRY IT NOW! <br />
                  </p>
                </div>
                <h1>$70HKD</h1>
                <StripeCheckout
                  token={this.onToken('1 Question', 7000)}
                  stripeKey={STRIPE_PUBLISHABLE_KEY}
                  name="Get Started Pack"
                  description="1 Question"
                  amount={7000} // cents
                  currency="HKD"
                >
                  <button className="btn btn-primary">Purchase Now</button>
                </StripeCheckout>
              </div>
            </div>

            <div className="card col-sm-4" style={{}}>
              <div className="card-body">
                <h5 className="card-title">Standard Pack</h5>
                <div style={{ marginBottom: 55, marginTop: 55 }}>
                  <h2 className="card-text">
                    3 Questions <br />
                  </h2>
                  <p className="card-text">
                    5% OFF DISCOUNT! <br />
                  </p>
                </div>
                <h1>$200HKD</h1>
                <StripeCheckout
                  token={this.onToken('3 Questions', 20000)}
                  stripeKey={STRIPE_PUBLISHABLE_KEY}
                  name="Standard Pack"
                  description="3 Question"
                  amount={20000} // cents
                  currency="HKD"
                >
                  <button className="btn btn-primary">Purchase Now</button>
                </StripeCheckout>
              </div>
            </div>

            <div className="card col-sm-4" style={{}}>
              <div className="card-body">
                <h5 className="card-title">Advanced Pack</h5>
                <div style={{ marginBottom: 55, marginTop: 55 }}>
                  <h2 className="card-text">
                    10 Questions <br />
                  </h2>
                  <p className="card-text">
                    10% OFF DISCOUNT! <br />
                  </p>
                </div>
                <h1>$630HKD</h1>
                <StripeCheckout
                  token={this.onToken('10 Questions', 63000)}
                  stripeKey={STRIPE_PUBLISHABLE_KEY}
                  name="Advanced Pack"
                  description="10 Question"
                  amount={63000} // cents
                  currency="HKD"
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
