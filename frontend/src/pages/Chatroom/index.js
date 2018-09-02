import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as ChatActions from '../../redux/actions/chatActions';
import { messagesByChatroom } from '../../redux/reducers/chatReducer';

class Chatroom extends Component {
  state = {
    inputMessage: '',
  };

  componentDidMount() {
    this.props.getAllMessages();
  }

  renderChats = () =>
    this.props.messages.map(message => (
      <div>
        {message.sender}: {message.message}
      </div>
    ));

  sendMessage = () => {
    this.props.sendChatMessage(
      this.state.inputMessage,
      this.props.userId,
      this.props.match.params.chatId,
    );
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
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    userId: state.user && state.user.profile && state.user.profile.id,
    messages: messagesByChatroom(state, ownProps.match.params.chatId),
  };
}

export default connect(
  mapStateToProps,
  ChatActions,
)(Chatroom);
