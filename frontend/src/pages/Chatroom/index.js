import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import ChatTab from './ChatTab';
import InstructorInfoTab from './InstructorInfoTab';
import EndSessionBar from './EndSessionBar';
import QuestionDiv from './QuestionDiv';
import '../../App.css';

import {
  sendChatMessage,
  getAllMessages,
  userStartSession,
  userEndSession,
  getChatroomStatus
} from '../../redux/actions/chatActions';

class Chatroom extends Component {
  state = {
    inputMessage: ''
  };

  componentWillMount() {
    this.props.getChatroomStatus(this.props.match.params.chatId);
  }

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
      this.props.history.push(`${this.props.match.url}/StudentRating`);
    } else {
      this.props.history.push('/my-questions/history');
    }
  };

  render() {
    console.log('this.state.imputMessage', this.state.imputMessage);
    console.log('this.props.chatroomStatus', this.props.chatroomStatus);
    console.log('this.props.instructorInfo', this.props.instructorInfo);
    if (this.props.chatroomStatus) {
      return (
        <div>
          <ChatTab status={this.props.chatroomStatus} />
          {this.props.instructorInfo && this.props.user.role === 'student' ? (
            <InstructorInfoTab details={this.props.instructorInfo} />
          ) : null}
          <EndSessionBar />
          <QuestionDiv />
          <div className="jumbotron" style={{ margin: 0 }}>
            <div className="container chatFont">
              <h1>Live Chat!</h1>
              <br />
              {this.props.messages
                .filter(
                  message =>
                    String(message.chatId) === this.props.match.params.chatId
                )
                .map((message, i) => {
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
              {this.props.chatroomStatus.active ? (
                <div>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="type here..."
                    value={this.state.inputMessage}
                    onChange={e =>
                      this.setState({ inputMessage: e.target.value })
                    }
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
                </div>
              ) : (
                <h2>This session has already expired.</h2> //if chatroom is no longer active, hide then input area.
              )}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="loading"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <ReactLoading type="spin" color="#black" height={100} width={100} />
        </div>
      );
    }
  }
}

function mapStateToProps(state, ownProps) {
  console.log('mapStateToProps - chatroom', state);
  return {
    user: state.user.profile,
    messages: state.chat.messages,
    instructorInfo: state.chat.instructorInfo,
    studentInfo: state.chat.studentInfo,
    chatroomStatus: state.chat.chatroomStatus
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sendChatMessage: (message, userId, displayName, role, chatId) =>
      dispatch(sendChatMessage(message, userId, displayName, role, chatId)),
    getAllMessages: (chatId, userId, role) =>
      dispatch(getAllMessages(chatId, userId, role)),
    userStartSession: (chatId, userId, role) =>
      dispatch(userStartSession(chatId, userId, role)),
    userEndSession: (chatId, userId, role) =>
      dispatch(userEndSession(chatId, userId, role)),
    getChatroomStatus: chatId => dispatch(getChatroomStatus(chatId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatroom);
