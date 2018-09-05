import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as ChatActions from '../../redux/actions/chatActions';

class Chatroom extends Component {
  state = {
    inputMessage: ''
  };

  componentDidMount() {
    console.log('did-this.props', this.props);
    setTimeout(() => {
      if (this.props.user) {
        this.props.userEnterChatroom(
          this.props.match.params.chatId,
          this.props.user.id,
          this.props.user.role
        );
        this.props.getAllMessages(
          this.props.match.params.chatId,
          this.props.user.id,
          this.props.user.role
        );
      }
    }, 500);
  }

  sendMessage = () => {
    console.log('this.props-sendMessage', this.props);
    this.props.sendChatMessage(
      this.state.inputMessage,
      this.props.user.id,
      this.props.user.displayName,
      this.props.match.params.chatId
    );
    this.setState({ inputMessage: '' });
  };

  endSession = () => {
    //step 1: action creator to change status
    //step 2: redirect to next page (History)
    //otherwise, will keep in on-going page
    this.props.history.push('/my-questions/history');
  };

  render() {
    // console.log(this.props.match);
    return (
      <div className="container">
        Chat
        {this.props.messages
          .filter(
            message => String(message.chatId) === this.props.match.params.chatId
          )
          .map((message, i) => {
            console.log('message123', message);
            return (
              <div key={message.message + i}>
                {message.displayName}: {message.message}
              </div>
            );
          })}
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
    user: state.user.profile,
    messages: state.chat.messages
  };
}

export default connect(
  mapStateToProps,
  ChatActions
)(Chatroom);
