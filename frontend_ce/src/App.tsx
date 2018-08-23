import * as React from "react";
import "./App.css";

import Nav from "./components/nav";

import Howitwork from "./components/howitwork";

import AboutUs from "./components/aboutus";

import Community from "./components/community";

import Footer from "./components/footer";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Nav />
        <header className="App-header">
          <h1 className="App-title">Welcome to CodeEasy</h1>
          <h2 className="App-subtitle">Snap and get live 1-on-1 coding help</h2>
          <button className="App-intro">Get start now!</button>
        </header>
        <Howitwork />
        <AboutUs />
        <Community />
        <Footer />
      </div>
    );
  }
}

export default App;
