import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as ChatActions from '../../redux/actions/chatActions';
import { messagesByChatroom } from '../../redux/reducers/chatReducer';

class Chatroom extends Component {
  state = {
    inputMessage: ''
  };

  componentDidMount() {
    this.props.getAllMessages();
  }

  renderChats = () =>
    this.props.messages.map((message, i) => {
      console.log('message', message);
      return (
        <div key={message.message + i}>
          {message.userId}: {message.message}
        </div>
      );
    });

  sendMessage = () => {
    // maybe get userId from params as well
    this.props.sendChatMessage(
      this.state.inputMessage,
      this.props.userId,
      this.props.match.params.chatId
    );
    this.setState({ inputMessage: '' });
  };

  endSession = () => {
    //step 1: action creator to change status
    //step 2: redirect to next page (History)
    //otherwise, will keep in on-going page
  };

  render() {
    return (
      <div className="container">
        Chat
        <div>{this.renderChats()}</div>
        <textarea
          value={this.state.inputMessage}
          onChange={e => this.setState({ inputMessage: e.target.value })}
        />
        <button className="button" onClick={this.sendMessage}>
          Submit
        </button>
        <button className="button" onClick={this.endSession}>
          End Session
        </button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    userId: state.user && state.user.profile && state.user.profile.id,
    messages: messagesByChatroom(state, ownProps.match.params.chatId)
  };
}

export default connect(
  mapStateToProps,
  ChatActions
)(Chatroom);
