import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div
        className="jumbotron jumbotron-fluid"
        style={{ margin: 0, background: '#00B0AF' }}
      >
        <div className="container">
          <div className="row">
            <h2 style={{ color: 'white' }}>Contact Us</h2>
          </div>
          <div className="row">
            <h6 style={{ color: 'white' }}>Leave your message here!</h6>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="inputDisplay">User Name</label>
              <input
                type="name"
                className="form-control"
                id="inputDisplay"
                placeholder="Username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="inputEmail">Email</label>
              <input type="email" className="form-control" id="inputEmail" />
            </div>

            <div className="form-group">
              <label htmlFor="inputPhone">Phone</label>
              <input type="phone" className="form-control" id="inputEmail" />
            </div>

            <div className="form-group" />
            <label htmlFor="exampleFormControlTextarea1">Message</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
            />
          </form>

          <br />
          <a type="submit" className="btn btn-primary">
            Send
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
