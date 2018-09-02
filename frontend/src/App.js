import React, { Component } from 'react';
// import logo from "./logo.svg";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';

import Signup from './pages/Signup';
// import Community from './pages/Community';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import InstructorSignup from './pages/Signup/instructor-signup';
import InstructorProfileForm from './pages/Signup/instructor-profileForm';
import UserSignup from './pages/Signup/user-signup';
import MultipleSelect from './pages/Signup/MultipleSelect';
import CreatePost from './pages/Forum/createPost/createPost';
import PostDetails from './pages/Forum/postDetails/postDetails';
import Posts from './pages/Forum/posts/posts';
import CreateQuestion from './pages/CreateQuestion/home';
import AskQuestion from './pages/CreateQuestion/AskQuestion';
import TakeOrder from './pages/TakeOrder';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/postDetails" component={PostDetails} />
            <Route exact path="/createPost" component={CreatePost} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/AskQuestion" component={AskQuestion} />
            <Route exact path="/CreateQuestion" component={CreateQuestion} />
            <Route
              exact
              path="/instructor-profileForm"
              component={InstructorProfileForm}
            />
            <Route exact path="/user-signup" component={UserSignup} />
            <Route
              exact
              path="/instuctor-signup"
              component={InstructorSignup}
            />
            <Route exact path="/MultipleSelect" component={MultipleSelect} />
            <Route exact path="/TakeOrder" component={TakeOrder} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
