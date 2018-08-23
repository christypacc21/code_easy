import * as React from "react";

class Footer extends React.Component {
  public render() {
    return (
      <div
        className="jumbotron jumbotron-fluid"
        style={{ margin: 0, background: "#2E2F2F", height: "15em" }}
      >
        <div className="container">
          <div>
            <h6 style={{ color: "white" }}> Contact us: CodeEasy@gmail.com</h6>
          </div>
          <div className="copyright" style={{ color: "white" }}>
            © Copyright 2018 CodeEasy. All Rights Reserved.
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
