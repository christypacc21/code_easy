import React, { Component } from 'react';
// import logo from "./logo.svg";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';

import Signup from './pages/Signup';
import Community from './pages/Community';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import InstructorSignup from './pages/Signup/instructor-signup';
import InstructorProfileForm from './pages/Signup/instructor-profileForm';
import UserSignup from './pages/Signup/user-signup';

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
						<Route exact path="/community" component={Community} />
						<Route exact path="/pricing" component={Pricing} />
						<Route exact path="/contact" component={Contact} />
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
					</Switch>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
