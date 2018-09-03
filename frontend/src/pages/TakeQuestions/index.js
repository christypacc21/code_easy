import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import * as QuestionActions from '../../redux/actions/questionAction';

class TakeQuestions extends React.Component {
  componentDidMount() {
    this.props.getAllQuestions();
  }

  renderQuestions = () => {
    return this.props.questions.map((question, i) => (
      <div className="card" key={i}>
        <div className="card-header">
          Coding skills:{' '}
          {question.skillInfo.map(skill => (
            <h3 style={{ margin: '0 3px' }}>
              <span class="badge badge-pill badge-info">{skill.skill}</span>
            </h3>
          ))}
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <img
                className="card-img-top codePhoto"
                style={{ width: 250 }}
                src={`${process.env.REACT_APP_API_SERVER}/${
                  question.questionInfo.image_path
                }`}
                alt={question.questionInfo.content}
              />
            </div>
            <div className="col-md-4">
              <h5 className="card-title">Question</h5>
              <p className="card-text">{question.questionInfo.content}</p>
              <a
                href={`/chatroom/${question.chatId && question.chatId.id}`}
                className="btn btn-primary "
              >
                Take Question
              </a>
            </div>
          </div>
        </div>
        <div className="card-footer text-muted">
          {moment(question.questionInfo.created_at).fromNow()}
        </div>
      </div>
    ));
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="jumbotron jumbotron-fluid"
          style={{ margin: 0, background: '#00B0AF' }}
        >
          <div className="container py-3">
            <div className="row">
              <h2 style={{ color: 'white' }}>Start Taking Questions!</h2>
            </div>
            <br />
            {this.renderQuestions()}
            <br />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions.all
  };
}

export default connect(
  mapStateToProps,
  QuestionActions
)(TakeQuestions);
