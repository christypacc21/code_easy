import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import ChatTab from '../MyQuestions/ChatTab';
import InstructorInfoTab from './InstructorInfoTab';
import '../../App.css';

import {
  sendChatMessage,
  getAllMessages,
  userStartSession,
  userEndSession
} from '../../redux/actions/chatActions';
import { getHistory } from '../../redux/actions/historyActions';

class Chatroom extends Component {
  state = {
    inputMessage: '',
    showInputBox: null
  };

  componentWillMount() {
    this.props.getHistory();
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
    // this.props.getChatroomStatus(this.props.match.params.chatId);
  }

  componentWillReceiveProps() {
    // for hiding the input box by checking the chatroom status
    if (this.props.chatInfo) {
      console.log('this.props.chatInfo', this.props.chatInfo);
      const chatStatus = this.props.chatInfo.map(chat => {
        // console.log('chat.question.chatroom_id', chat.question.chatroom_id);
        // console.log(
        //   'this.props.match.params.chatId',
        //   this.props.match.params.chatId
        // );

        // have to use == because 'this.props.match.params.chatId' is a string?
        // eslint-disable-next-line
        if (chat.question.chatroom_id == this.props.match.params.chatId) {
          return chat.question.chatroom_active;
        } else {
          return null;
        }
      });
      console.log('chatStatus', chatStatus);
      return chatStatus.map(status => {
        if (status === false) {
          return this.setState({ showInputBox: false });
        } else if (status === true) {
          return this.setState({ showInputBox: true });
        } else {
          return null;
        }
      });
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
      this.setState({ showInputBox: false });
      this.props.history.push(`${this.props.match.url}/StudentRating`);
    } else {
      this.setState({ showInputBox: false });
      this.props.history.push('/my-questions/history');
    }
  };

  render() {
    console.log('this.state.imputMessage', this.state.imputMessage);
    // this.props.instructorInfo
    //   ? console.log('this.props.instructorInfo', this.props.instructorInfo)
    //   : null;
    if (this.props.chatInfo && this.state.showInputBox !== null) {
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
              {this.state.showInputBox ? (
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
  // console.log("chatroomStatus's incoming state");
  // console.log(state.chat.chatroomStatus);
  return {
    user: state.user.profile,
    messages: state.chat.messages,
    instructorInfo: state.chat.instructorInfo,
    studentInfo: state.chat.studentInfo,
    chatInfo: state.getHistory.data.history
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHistory: () => dispatch(getHistory()),
    sendChatMessage: (message, userId, displayName, role, chatId) =>
      dispatch(sendChatMessage(message, userId, displayName, role, chatId)),
    getAllMessages: (chatId, userId, role) =>
      dispatch(getAllMessages(chatId, userId, role)),
    userStartSession: (chatId, userId, role) =>
      dispatch(userStartSession(chatId, userId, role)),
    userEndSession: (chatId, userId, role) =>
      dispatch(userEndSession(chatId, userId, role))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatroom);
