import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatTab from '../MyQuestions/ChatTab';
// import InstructorInfo from './InstructorInfo';
import '../../App.css';

import * as ChatActions from '../../redux/actions/chatActions';

class Chatroom extends Component {
  state = {
    inputMessage: ''
  };

  componentDidMount() {
    console.log('did-this.props', this.props);
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
    console.log(this.state.imputMessage);
    // console.log(this.props.match);
    // const {
    //   displayName,
    //   email,
    //   iEducation,
    //   iIntroduction,
    //   iNumRating,
    //   iTotalRating,
    //   iYearOfCodeExp,
    //   id,
    //   profilePic,
    //   role
    // } = this.props.user;
    return (
      <div>
        <ChatTab />
        {/* <InstructorInfo
          name={displayName}
          email={email}
          edu={iEducation}
          intro={iIntroduction}
          numRate={iNumRating}
          totalRate={iTotalRating}
          codeExp={iYearOfCodeExp}
          id={id}
          proPic={profilePic}
          role={role}
        /> */}
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
            <textarea
              className="form-control"
              rows="1"
              value={this.state.inputMessage}
              onChange={e => this.setState({ inputMessage: e.target.value })}
            />
            <button
              className="btn btn-info btn-lg btn-block"
              onClick={this.sendMessage}
            >
              Submit
            </button>
            <br />
            <button
              className="btn btn-warning btn-lg"
              onClick={this.endSession}
            >
              End Session
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log('mapStateToProps - chatroom', state);
  return {
    user: state.user.profile,
    messages: state.chat.messages,
    instructorInfo: state.chat.instructorInfo
  };
}

export default connect(
  mapStateToProps,
  ChatActions
)(Chatroom);
