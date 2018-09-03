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
import myQuestions from './pages/TakeQuestions/my-questions';
import instructorProfile from './pages/Profile/instructorProfile';
import userProfile from './pages/Profile/userProfile';

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
            <Route exact path="/postsPage" component={PostsPage} />
            <Route exact path="/postDetails" component={PostDetails} />
            <Route exact path="/posts/new" component={CreatePost} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/AskQuestion" component={AskQuestion} />
            <Route exact path="/CreateQuestion" component={CreateQuestion} />
            <Route exact path="/chatroom/:chatId" component={Chatroom} />
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
            <Route exact path="/my-questions" component={myQuestions} />
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

export default App;
