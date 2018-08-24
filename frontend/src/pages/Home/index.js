import React from "react";
import Howitwork from "./Howitwork";
import AboutUs from "./Aboutus";
import Community from "./Community";

export default () => (
  <div>
    <header className="App-header">
      <h1 className="App-title">Welcome to CodeEasy</h1>
      <h2 className="App-subtitle">Snap and get live 1-on-1 coding help</h2>
      <button className="App-intro">Get start now!</button>
    </header>
    <Howitwork />
    <AboutUs />
    <Community />
  </div>
);