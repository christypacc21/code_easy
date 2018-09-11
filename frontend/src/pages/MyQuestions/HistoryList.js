import React, { Component } from 'react';
import HistoryCard from './HistoryCard';
import { connect } from 'react-redux';
import { getHistory } from '../../redux/actions/historyActions';

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
      return this.props.historyData.map((history, i) => {
        return (
          <div key={i}>
            <HistoryCard
              skill={history.skill}
              questionDateTime={history.questionDateTime}
              chatroomStartTime={history.chatroomStartTime}
              content={history.content}
              imagePath={history.image_path}
              // username={}
              instructorId={history.instructor_id}
              studentId={history.student_id}
              rating={history.s_rating}
              duration={history.duration}
              fee={history.fee}
              chatroomId={history.chatroom_id}
              questionId={history.question_id}
            />
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div>
        {/* <React.Fragment> */}
        <div
          // className="jumbotron jumbotron-fluid"
          className=""
          style={{ margin: 0, background: '#00B0AF' }}
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
)(HistoryList);
