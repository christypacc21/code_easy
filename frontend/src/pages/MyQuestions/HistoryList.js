import React, { Component } from 'react';
import HistoryCard from './HistoryCard';
import { connect } from 'react-redux';
import { getHistory } from '../../redux/actions/historyActions';
import moment from 'moment';

class HistoryList extends Component {
  componentWillMount() {
    this.props.onGetHistory();
    console.log('aaaaaa');
    console.log(this.props.historyData);
  }

  renderHistoryList() {
    if (!this.props.historyData) {
      return <p>Loading History List ...</p>;
    } else {
      const FArray = this.props.historyData.filter(his => {
        return his.question.chatroom_active === false;
      });

      if (FArray.length === 0) {
        return (
          <h1 style={{ color: 'white' }}>You Don't Have Any Finished Chat</h1>
        );
      } else {
        return FArray.map((history, i) => {
          const question = history.question;
          return (
            <div key={i}>
              <HistoryCard
                skills={history.skills}
                questionDateTime={moment(question.questionDateTime).format(
                  'lll'
                )}
                questionFromNow={moment(question.questionDateTime).fromNow()}
                chatroomStartTime={moment(question.chatroomStartTime).format(
                  'lll'
                )}
                chatroomFromNow={moment(question.chatroomStartTime).fromNow()}
                content={question.content}
                imagePath={question.image_path}
                // username={}
                instructorId={question.instructor_id}
                studentId={question.student_id}
                rating={question.s_rating}
                duration={question.duration}
                fee={question.fee}
                chatroomId={question.chatroom_id}
                questionId={question.question_id}
              />
            </div>
          );
        });
      }
    }
  }

  render() {
    return (
      <div>
        {/* <React.Fragment> */}
        <div
          // className="jumbotron jumbotron-fluid"
          className=""
          style={{ margin: 0, background: '#00B0AF', minHeight: '1000px' }}
        >
          <div className="container py-3">
            <h4 style={{ color: 'white' }}>
              Chat History Here (Questions with ended chatroom)(Consultation
              service finished)
            </h4>
            {this.renderHistoryList()}
          </div>
          <br />
        </div>
        {/* </React.Fragment> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state.getHistory.data.history', state.getHistory.data.history);
  return {
    isPending: state.getHistory.isPending,
    historyData: state.getHistory.data.history,
    error: state.getHistory.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetHistory: () => dispatch(getHistory())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryList);
