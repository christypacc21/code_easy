import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';

import Signup from './pages/Signup';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import InstructorSignup from './pages/Signup/instructor-signup';
import InstructorProfileForm from './pages/Signup/instructor-profileForm';
import UserSignup from './pages/Signup/user-signup';
import MultipleSelect from './pages/Signup/MultipleSelect';
import CreatePost from './pages/Forum/createPost/createPost';
import PostDetails from './pages/Forum/postDetails/postDetails';
import PostsPage from './pages/Forum/posts/postsPage';
import CreateQuestion from './pages/CreateQuestion/home';
import AskQuestion from './pages/CreateQuestion/AskQuestion';
import TakeQuestions from './pages/TakeQuestions';
import Chatroom from './pages/Chatroom';
import MyHistory from './pages/MyQuestions/History';
import MyOngoing from './pages/MyQuestions/Ongoing';
import Profile from './pages/Profile';
import instructorProfile from './pages/Profile/instructorProfile';
import userProfile from './pages/Profile/userProfile';

import { connect } from 'react-redux';
import * as userActions from './redux/actions/userActions';

class App extends Component {
  componentWillMount() {
    this.props.getMyProfile();
    console.log('app.js - this.props.authenticated', this.props.authenticated);
  }
  render() {
    const authToken = localStorage.getItem('token');
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/posts" component={PostsPage} />
            <Route exact path="/posts/new" component={CreatePost} />
            <Route exact path="/posts/:id" component={PostDetails} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/AskQuestion" component={AskQuestion} />
            <Route exact path="/CreateQuestion" component={CreateQuestion} />
            {authToken && (
              <Route path="/chatroom/:chatId" component={Chatroom} />
            )}
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
            <Route exact path="/TakeQuestions" component={TakeQuestions} />
            <Route exact path="/my-questions/ongoing" component={MyOngoing} />
            <Route exact path="/my-questions/history" component={MyHistory} />
            <Route exact path="/profile" component={Profile} />
            <Route
              exact
              path="/instructorProfile"
              component={instructorProfile}
            />
            <Route exact path="/userProfile" component={userProfile} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.user.authenticated,
    role: state.user && state.user.profile && state.user.profile.role
  };
}

export default connect(
  mapStateToProps,
  userActions
)(App);
