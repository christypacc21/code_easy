import React from 'react';
import Howitwork from './Howitwork';
import AboutUs from './Aboutus';
import Community from './Community';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <header className="App-header">
      <h1 className="display-4">Welcome to CodeEasy</h1>
      <h4 className="lead">Snap and get live 1-on-1 coding help</h4>
      <Link className="btn btn-primary " to="/signup">
        Get Start Now!
      </Link>
    </header>
    <Howitwork />
    <Community />
    <AboutUs />
  </div>
);
