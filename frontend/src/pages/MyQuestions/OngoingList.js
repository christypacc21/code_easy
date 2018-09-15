import React, { Component } from 'react';
import HistoryCard from './HistoryCard';
import { connect } from 'react-redux';
import { getHistory } from '../../redux/actions/historyActions';

class OngoingList extends Component {
  componentWillMount() {
    this.props.onGetHistory();
    console.log('aaaaaa');
    console.log(this.props.historyData);
  }

  renderOngoingList() {
    if (!this.props.historyData) {
      return <p>Loading History List ...</p>;
    } else {
      const FArray = this.props.historyData.filter(his => {
        return his.question.chatroom_active === true;
      });
      // console.log(FArray);
      if (FArray.length === 0) {
        return (
          <h1 style={{ color: 'white' }}>You Don't Have Any Unfinished Chat</h1>
        );
      } else {
        return FArray.map((history, i) => {
          const question = history.question;
          return (
            <div key={i}>
              <HistoryCard
                skills={history.skills}
                questionDateTime={question.questionDateTime}
                chatroomStartTime={question.chatroomStartTime}
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
          style={{ margin: 0, background: '#00B0AF', minHeight: '1000px' }}
        >
          <div className="container py-3">
            <h4 style={{ color: 'white' }}>
              Onging Chatroom Here (Questions with unfinished chatroom)
            </h4>
            <p>
              To end the chat session,please press the "End session" button
              inside the unfinished chatroom. After chatroom session is ended,
              one question quota will be deducted from your account. Once the
              chatroom session is ended. The chatroom will be closed and
              deactived while you can still read the chat history in the
              'History' Tab. Enjoy!
            </p>
            {this.renderOngoingList()}
          </div>
          <br />
        </div>
        {/* </React.Fragment> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('bbbbbbbbb');
  console.log(state.getHistory.data.history);
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
)(OngoingList);
