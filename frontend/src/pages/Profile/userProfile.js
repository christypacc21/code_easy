import React from 'react';

class userProfile extends React.Component {
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
export default userProfile;
