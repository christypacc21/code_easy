import React from 'react';
import Howitwork from './Howitwork';
import AboutUs from './Aboutus';
import Community from './Community';
import OurTeam from './OurTeam';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <div className="bigHeader">
            <p>Welcome to CodeEasy</p>
            <p className="lead">Get live 1-on-1 coding help now!</p>
            {!this.props.user.authenticated ? (
              <Link className="btn btn-primary " to="/signup">
                Get Start Now!
              </Link>
            ) : null}
          </div>
        </header>
        <Howitwork />
        <Community />
        <AboutUs />
        <OurTeam />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  null
)(Home);
