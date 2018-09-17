import React, { Component } from 'react';

class Contact extends Component {
  state = {
    username: '',
    email: '',
    phone: '',
    message: ''
  };

  sendForm = e => {
    e.preventDefault();
    const { username, message } = this.state;

    alert(`Hello ${username}! We have recieved your message: ${message}`);
    this.setState({
      username: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  render() {
    const { username, email, phone, message } = this.state;

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
          <form onSubmit={this.sendForm}>
            <div className="form-group">
              <label htmlFor="inputDisplay">User Name</label>
              <input
                type="name"
                className="form-control"
                id="inputDisplay"
                value={username}
                onChange={e => this.setState({ username: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="inputEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                value={email}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="inputPhone">Phone</label>
              <input
                type="phone"
                className="form-control"
                id="inputEmail"
                value={phone}
                onChange={e => this.setState({ phone: e.target.value })}
              />
            </div>

            <div className="form-group" />
            <label htmlFor="exampleFormControlTextarea1">Message</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              value={message}
              onChange={e => this.setState({ message: e.target.value })}
            />
            <br />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
