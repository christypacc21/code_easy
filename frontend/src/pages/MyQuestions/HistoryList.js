import React, { Component } from 'react';
import HistoryCard from './HistoryCard';
import { connect } from 'react-redux';
import { getHistory } from '../../redux/actions/historyActions';

class HistoryList extends Component {
  componentWillMount() {
    this.props.onGetHistory();
    console.log(this.props.postData);
  }

  renderHistoryList() {
    if (!this.props.historyData) {
      return <p>Loading History List ...</p>;
    } else {
      return this.props.historyData.map((history, i) => {
        return (
          <div key={i}>
            <HistoryCard
              // skills={}
              dateTime={history.created_at}
              //  title={}
              // username={}
              // rating={}
            />
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <p>History list</p>
        {this.renderHistoryList()}
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
