import React from 'react';
import Howitwork from './Howitwork';
import AboutUs from './Aboutus';
import Community from './Community';
import OurTeam from './OurTeam';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <header className="App-header">
      <div className="bigHeader">
        <p>Welcome to CodeEasy</p>
        <p className="lead">Snap and get live 1-on-1 coding help</p>
        <Link className="btn btn-primary " to="/signup">
          Get Start Now!
        </Link>
      </div>
    </header>
    <Howitwork />
    <Community />
    <AboutUs />
    <OurTeam />
  </div>
);
