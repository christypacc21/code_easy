import React, { Component } from 'react';
import HistoryCard from './HistoryCard';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getHistory } from '../../redux/actions/historyActions';

class HistoryList extends Component {
  // component
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
