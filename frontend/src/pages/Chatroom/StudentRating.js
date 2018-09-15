import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as chatActions from '../../redux/actions/chatActions';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// import ReactLoading from 'react-loading';

class StudentRating extends React.Component {
  state = {
    rating: 0,
    feedback: ''
  };
  // console.log('this.props - StudentRating', this.props);

  render() {
    // if (this.props.profile) {
    return (
      <div
        className="container-fluid"
        style={{ padding: 80, background: '#00B0AF', color: 'white' }}
      >
        <div className="row">
          <div className="col-12">
            <h1>Thank you, this session has been completed!</h1>
            <br />
          </div>
          {/* {this.props ? ( */}
          <div className="col-sm-12">
            <h4>How was the session with {}?</h4>
            <br />
            <Rating
              style={{ width: 500 }}
              stop={5}
              emptySymbol={
                <FontAwesomeIcon
                  style={{ paddingRight: 10 }}
                  icon={faStar}
                  size="2x"
                  color="grey"
                />
              }
              fullSymbol={
                <FontAwesomeIcon
                  style={{ paddingRight: 10 }}
                  icon={faStar}
                  size="2x"
                  color="gold"
                />
              }
            />
          </div>

          <form className="form-group" className="col-sm-8">
            <br />
            <h4>Please write your feedback here:</h4>
            <br />
            <textarea
              className="form-control"
              rows="5"
              value={this.state.feedback}
              onChange={e => {
                this.setState({ feedback: e.target.value });
              }}
            />
            <br />
            <Link to={`/my-questions/history`} className="btn btn-primary ">
              Submit
            </Link>
          </form>
          {/* ) : (
              <div className="col-sm-12">
                <span style={{ color: 'red' }}>
                  <br />
                  <h4>
                    However, the payment is not successfully made. Please try
                    again or contact us.
                  </h4>
                </span>
              </div>
            )} */}
        </div>
      </div>
    );
    // } else {
    //   return (
    //     <div
    //       className="loading"
    //       style={{
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center'
    //       }}
    //     >
    //       <ReactLoading type="spin" color="#black" height={100} width={100} />
    //     </div>
    //   );
    // }
  }
}

function mapStateToProps(state) {
  return {
    profile: state.user.profile,
    messages: state.chat.messages
  };
}

export default connect(
  mapStateToProps,
  chatActions
)(StudentRating);
