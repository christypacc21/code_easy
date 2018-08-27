import * as React from "react";
import "./App.css";

import Nav from "./components/Nav";

import { Login } from "./components/Login";

import Howitwork from "./components/Howitwork";

import AboutUs from "./components/Aboutus";

import Community from "./components/Community";

import Footer from "./components/Footer";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./redux/store";
// import { RouterOutlet } from "./RouterOutlet";

// import Pricing from "./components/Pricing";

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Nav />
            <header className="App-header">
              <h1 className="App-title">Welcome to CodeEasy</h1>
              <h2 className="App-subtitle">
                Snap and get live 1-on-1 coding help
              </h2>
              <button className="App-intro">Get start now!</button>
            </header>
            <Login />
            <Howitwork />
            <AboutUs />
            <Community />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
