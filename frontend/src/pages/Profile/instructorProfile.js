import React from 'react';

class instructorProfile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron jumbotron-fluid" style={{ margin: 0 }}>
          <div className="container">
            <h1 className="display-4">My Profile</h1>
          </div>

          <br />

          <form>
            <div className="container">
              <div className="form-group">
                <label htmlFor="inputEmail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="inputDisplay">Username</label>
                <input
                  type="name"
                  className="form-control"
                  id="inputDisplay"
                  placeholder="Username"
                />
              </div>

              <div className="form-group" />
              <label htmlFor="exampleFormControlTextarea1">Introduction</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              />

              <div className="form-group" />
              <label htmlFor="exampleFormControlTextarea2">Education</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea2"
                rows="3"
              />

              <div className="form-group" />
              <label htmlFor="exampleFormControlSelect1">
                Year of coding experience
              </label>
              <input className="form-control" id="exampleFormControlSelect1" />

              <div className="form-group" />
              <label htmlFor="exampleFormControlSelect2">Coding Skills</label>
              <input className="form-control" id="exampleFormControlSelect1" />

              <div className="form-group" />
              <img
                className="card-img-top "
                style={{ width: 250 }}
                src={''}
                alt={''}
              />
            </div>
          </form>
          <div className="container">
            <h6>Profile Picture Upload</h6>
            <div className="avatar-upload">
              <div className="avatar-edit">
                <input
                  type="file"
                  id="imageUpload"
                  accept=".png, .jpg, .jpeg"
                />
                <label for="imageUpload" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default instructorProfile;
