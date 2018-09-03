import React from 'react';
import { connect } from 'react-redux';
import * as QuestionActions from '../../redux/actions/questionAction';
import codePhoto from '../../img/code.jpg';

class TakeQuestions extends React.Component {
  componentDidMount() {
    this.props.getAllQuestions();
  }

  renderQuestions = () => {
    return this.props.questions.map((question, i) => (
      <div className="card" key={i}>
        <div className="card-header">Coding skills: {question.skills}</div>

        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <img
                className="card-img-top codePhoto"
                style={{ width: 250 }}
                src={codePhoto}
                alt="Code"
              />
            </div>
            <div className="col-md-4">
              <h5 className="card-title">Question</h5>
              <p className="card-text">{question.contnet}</p>
              <a href="/chatroom" className="btn btn-primary ">
                Take Order
              </a>
            </div>
          </div>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
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
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a className="page-link" href="/">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
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
