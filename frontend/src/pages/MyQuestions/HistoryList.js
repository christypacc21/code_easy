import React, { Component } from 'react';
import HistoryCard from './HistoryCard';
// import { connect } from 'react-redux';

class HistoryList extends Component {
  render() {
    return (
      <div>
        <p>History list</p>
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </div>
    );
  }
}

export default HistoryList;
