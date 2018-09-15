import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as chatActions from '../../redux/actions/chatActions';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ReactLoading from 'react-loading';

class StudentRating extends React.Component {
  state = {
    rating: 0,
    feedback: ''
  };

  handleRatingChange = rating => {
    console.log('rating', rating);
    this.setState({ rating });
  };

  render() {
    if (this.props.user && this.props.instructorInfo) {
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
              <h4>
                How was the session with {this.props.instructorInfo.displayName}{' '}
                ?
              </h4>
              <br />
              <Rating
                style={{ width: 500 }}
                initialRating={this.state.rating}
                onChange={this.handleRatingChange.bind(this)}
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

            <form className="form-group col-sm-8">
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
              <Link
                to={`/my-questions/history`}
                className="btn btn-primary "
                onClick={() => {
                  console.log(
                    'rating submit',
                    this.props.match.params.chatId,
                    this.state.rating,
                    this.state.feedback
                  );
                  this.props.createRating(
                    this.props.match.params.chatId,
                    this.state.rating,
                    this.state.feedback
                  );
                }}
              >
                Submit
              </Link>
            </form>
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
    user: state.user.profile,
    instructorInfo: state.chat.instructorInfo
  };
}

export default connect(
  mapStateToProps,
  chatActions
)(StudentRating);
