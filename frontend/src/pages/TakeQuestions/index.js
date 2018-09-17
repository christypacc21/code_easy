import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import * as QuestionActions from '../../redux/actions/questionAction';
import Lightbox from 'react-images';
import { Link } from 'react-router-dom';
import './takeQ.css';

class TakeQuestions extends React.Component {
  state = {
    lightboxImage: '',
    lightboxIsOpen: false
  };

  componentDidMount() {
    this.props.getAllQuestions();
  }

  closeLightbox = () => {
    this.setState({
      lightboxImage: '',
      lightboxIsOpen: false
    });
  };

  openLightbox = imgPath => {
    if (imgPath) {
      this.setState({
        lightboxImage: imgPath,
        lightboxIsOpen: true
      });
    }
  };

  renderQuestions = () => {
    console.log('this.props.questions', this.props.questions);
    if (!this.props.questions) {
      return (
        <div>
          <h1>Loading questions...</h1>
        </div>
      );
    } else {
      return this.props.questions.map((question, i) => {
        return (
          <React.Fragment key={i}>
            <div className="card">
              <div className="card-header">
                Related coding skills:
                <div className="skills">
                  {question.skillInfo.map((skill, j) => (
                    <h3 key={j}>
                      <span className="badge badge-pill badge-info">
                        {skill.skill}
                      </span>
                    </h3>
                  ))}
                </div>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    {question.questionInfo.image_path ? (
                      <img
                        className="card-img-top codePhoto"
                        style={{ width: 250, cursor: 'pointer' }}
                        src={`${process.env.REACT_APP_API_SERVER}/${
                          question.questionInfo.image_path
                        }`}
                        alt={question.questionInfo.content}
                        onClick={() =>
                          this.openLightbox(
                            `${process.env.REACT_APP_API_SERVER}/${
                              question.questionInfo.image_path
                            }`
                          )
                        }
                      />
                    ) : (
                      <p>This question has no image</p>
                    )}
                  </div>

                  <div className="col-md-4">
                    <h5 className="card-title">Question</h5>
                    <p className="card-text">{question.questionInfo.content}</p>
                    {!question.chatInfo ? (
                      <div>Loading Chatroom</div>
                    ) : (
                      <Link
                        to={`/chatroom/${question.chatInfo.id}`}
                        className="btn btn-primary"
                      >
                        Answer
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-footer text-muted">
                {moment(question.questionInfo.created_at).fromNow()}
              </div>
            </div>
          </React.Fragment>
        );
      });
    }
  };

  render() {
    console.log('this.props.questions-render', this.props.questions[0]);

    if (!this.props.questions[0]) {
      return (
        <React.Fragment>
          <div
            className="jumbotron jumbotron-fluid"
            style={{ margin: 0, background: '#00B0AF' }}
          >
            <div className="container py-3">
              <div className="row">
                <h2 style={{ color: 'white' }}>
                  Waiting for more questions...
                </h2>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div
            className="jumbotron jumbotron-fluid"
            style={{ margin: 0, background: '#00B0AF' }}
          >
            <div className="container py-3">
              <div className="row header">
                <h2>Start Taking Questions!</h2>
              </div>
              <br />
              {this.renderQuestions()}
              <br />
            </div>
          </div>
          <Lightbox
            images={[
              {
                src: this.state.lightboxImage
              }
            ]}
            isOpen={this.state.lightboxIsOpen}
            onClose={this.closeLightbox}
          />
        </React.Fragment>
      );
    }
  }
}

function mapStateToProps(state) {
  console.log(state.questions.all);
  return {
    questions: state.questions.all
  };
}

export default connect(
  mapStateToProps,
  QuestionActions
)(TakeQuestions);
