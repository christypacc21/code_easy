import React from 'react';
// import codePhoto from '../../img/code.jpg';

class TakeQuestions extends React.Component {
  componentDidMount() {
    // callAPI
  }
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
            <div className="card">
              <div className="card-header">Coding skills: React</div>
              {/* <div className="col-md-4">
                <img
                  className="card-img-top codePhoto"
                  style={{ width: 250 }}
                  src={codePhoto}
                  alt="Code"
                />
              </div> */}

              <div className="card-body">
                <h5 className="card-title">Question</h5>
                <p className="card-text">What is React? Where to learn?</p>
                <a href="/chatroom" class="btn btn-primary">
                  Answer
                </a>
              </div>
              <div class="card-footer text-muted">2 days ago</div>
            </div>

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

export default TakeQuestions;
