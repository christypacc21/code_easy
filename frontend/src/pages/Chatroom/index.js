import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatTab from '../MyQuestions/ChatTab';
import InstructorInfoTab from './InstructorInfoTab';
import '../../App.css';

import * as ChatActions from '../../redux/actions/chatActions';

class Chatroom extends Component {
  state = {
    inputMessage: ''
    // showInputBox: true
  };

  componentDidMount() {
    console.log('did-this.props', this.props);
    // console.log('chatId', this.props.match.params.chatId);
    if (this.props.user) {
      this.props.userStartSession(
        this.props.match.params.chatId,
        this.props.user.id,
        this.props.user.role
      );
      this.props.getAllMessages(
        this.props.match.params.chatId,
        this.props.user.id,
        this.props.user.role
      );
      // this.props.getChatroomStatus(this.props.match.params.chatId);
    }
  }

  sendMessage = () => {
    console.log('this.props-sendMessage', this.props);
    this.props.sendChatMessage(
      this.state.inputMessage,
      this.props.user.id,
      this.props.user.displayName,
      this.props.user.role,
      this.props.match.params.chatId
    );
    this.setState({ inputMessage: '' });
  };

  endSession = () => {
    //step 1: action creator to change status
    //step 2: redirect to next page (History)
    //otherwise, will keep in on-going page

    //should also insert fee of the chatroom and add to instructor balance

    this.props.userEndSession(
      this.props.match.params.chatId,
      this.props.user.id,
      this.props.user.role
    );

    if (this.props.user.role === 'student') {
      // this.setState({ showInputBox: false });
      this.props.history.push(`${this.props.match.url}/StudentRating`);
    } else {
      // this.setState({ showInputBox: false });
      this.props.history.push('/my-questions/history');
    }
  };

  render() {
    console.log('this.state.imputMessage', this.state.imputMessage);
    // this.props.instructorInfo
    //   ? console.log('this.props.instructorInfo', this.props.instructorInfo)
    //   : null;
    return (
      <div>
        <ChatTab />
        {this.props.instructorInfo && this.props.user.role === 'student' ? (
          <InstructorInfoTab details={this.props.instructorInfo} />
        ) : null}
        <div className="jumbotron" style={{ margin: 0 }}>
          <div className="container">
            <h1>Live Chat!</h1>
            <br />
            {this.props.messages
              .filter(
                message =>
                  String(message.chatId) === this.props.match.params.chatId
              )
              .map((message, i) => {
                console.log('chatroom message', message);
                return (
                  <div key={i}>
                    <strong>{message.displayName}: </strong>
                    {message.role === 'instructor' ? (
                      <pre className="instructorSpeechBubble">
                        {message.message}
                      </pre>
                    ) : (
                      <pre className="studentSpeechBubble">
                        {message.message}
                      </pre>
                    )}
                  </div>
                );
              })}
            {/* {this.state.showInputBox ? ( */}
            <div>
              <textarea
                className="form-control"
                rows="5"
                placeholder="type here..."
                value={this.state.inputMessage}
                onChange={e => this.setState({ inputMessage: e.target.value })}
              />
              <button
                className="btn btn-info btn-lg btn-block"
                onClick={this.sendMessage}
              >
                Send
              </button>
              <br />
              <button
                className="btn btn-warning btn-lg"
                onClick={this.endSession}
              >
                End Session
              </button>
              {/* ) : (
              <p /> //if chatroom is no longer active, hide then input area.
            )} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log('mapStateToProps - chatroom', state);
  // console.log("chatroomStatus's incoming state");
  // console.log(state.chat.chatroomStatus);
  return {
    user: state.user.profile,
    messages: state.chat.messages,
    instructorInfo: state.chat.instructorInfo,
    studentInfo: state.chat.studentInfo
  };
}

export default connect(
  mapStateToProps,
  ChatActions
)(Chatroom);
