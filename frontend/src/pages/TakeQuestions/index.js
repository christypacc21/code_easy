import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
// import Lightbox from 'react-images';
import * as QuestionActions from '../../redux/actions/questionAction';
import Lightbox from 'react-images';
import { Link } from 'react-router-dom';

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
    if (this.props.questions) {
      return this.props.questions.map((question, i) => {
        if (question.questionInfo.image_path) {
          return (
            <div className="card" key={i}>
              <div className="card-header">
                Related coding skills:
                <div
                  style={{
                    marginTop: '4px',
                    display: 'flex',
                    flexDirection: 'row'
                  }}
                >
                  {question.skillInfo.map((skill, j) => (
                    <h3 style={{ margin: '0 3px' }} key={j}>
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
                  </div>
                  <div className="col-md-4">
                    <h5 className="card-title">Question</h5>
                    <p className="card-text">{question.questionInfo.content}</p>
                    <Link
                      to={`/chatroom/${question.chatInfo.id}`}
                      className="btn btn-primary "
                    >
                      Answer
                    </Link>
                  </div>
                </div>
              </div>

              <div className="card-footer text-muted">
                {moment(question.questionInfo.created_at).fromNow()}
              </div>
            </div>
          );
        } else {
          return (
            <div className="card" key={i}>
              <div className="card-header">
                Related coding skills:
                <div
                  style={{
                    marginTop: '4px',
                    display: 'flex',
                    flexDirection: 'row'
                  }}
                >
                  {question.skillInfo.map((skill, j) => (
                    <h3 style={{ margin: '0 3px' }} key={j}>
                      <span className="badge badge-pill badge-info">
                        {skill.skill}
                      </span>
                    </h3>
                  ))}
                </div>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-md-4" />
                  <div className="col-md-4">
                    <h5 className="card-title">Question</h5>
                    <p className="card-text">{question.questionInfo.content}</p>
                    <Link
                      to={`/chatroom/${question.chatInfo.id}`}
                      className="btn btn-primary "
                    >
                      Answer
                    </Link>
                  </div>
                </div>
              </div>

              <div className="card-footer text-muted">
                {moment(question.questionInfo.created_at).fromNow()}
              </div>
            </div>
          );
        }
      });
    }
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

function mapStateToProps(state) {
  return {
    questions: state.questions.all
  };
}

export default connect(
  mapStateToProps,
  QuestionActions
)(TakeQuestions);
