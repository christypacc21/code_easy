import * as React from "react";

class Nav extends React.Component<{}, {}> {
  public render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{}}>
        <a className="navbar-brand" href="#">
          CodeEasy
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Login <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./components/Pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="">
                Coding Community
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link " href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
