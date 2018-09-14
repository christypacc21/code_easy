import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as userActions from '../../redux/actions/userActions';
import ReactLoading from 'react-loading';

class StudentRating extends React.Component {
  constructor(props) {
    super(props);
    // console.log('this.props - StudentRating', this.props);
  }

  render() {
    if (this.props.profile && this.props) {
      return (
        <div style={{ padding: 100, background: '#00B0AF', color: 'white' }}>
          <div className="row">
            <div className="col-12">
              <h1>Thank you!</h1>
              <br />
            </div>
            {this.props.paymentResponse.success ? (
              <div className="col-sm-12">
                <h4>
                  Your payment has been processed. Here are the details of this
                  transaction for your reference:
                </h4>
                <br />
                <div className="col-sm-12">
                  <p>{this.props.description}</p>
                  <p>Invoice Number: {this.props.paymentResponse.receipt}</p>
                  <p>Description: {this.props.packageType}</p>
                  <p>
                    Amount Paid: HK$
                    {this.props.paymentResponse.amount / 100}
                  </p>
                  <p>
                    Remaining Question Credit(s):{' '}
                    {this.props.paymentResponse.totalQuestionCredits}
                  </p>
                  <br />
                  <Link to={`/AskQuestion`} className="btn btn-primary ">
                    Ask Question Now
                  </Link>
                </div>
              </div>
            ) : (
              <div className="col-sm-12">
                <span style={{ color: 'red' }}>
                  <br />
                  <h4>
                    However, the payment is not successfully made. Please try
                    again or contact us.
                  </h4>
                </span>
              </div>
            )}
            <div className="col-12 text-right">
              <img
                alt="Powered by Stripe"
                src="https://stripe.com/img/about/logos/badge/solid-dark.svg"
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="loading"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <ReactLoading type="spin" color="#black" height={100} width={100} />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    profile: state.user.profile
  };
}

export default connect(
  mapStateToProps,
  userActions
)(ThankYou);
