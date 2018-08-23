const express = require('express');
const passport = require('passport');
// const expressSession = require('express-session');

module.exports = class ViewRouter {

	router() {
		const router = express.Router();
		router.get('/', (req, res) => res.render('index'));
		// router.get('/home', isLoggedIn, (req, res) => res.render("home"));
		// router.get('/ranking', isLoggedIn, (req, res) => res.render("ranking"));
		// router.get('/search', isLoggedIn, (req, res) => res.render("search"));
		// router.get('/profile', isLoggedIn, (req, res) => res.render("profile"));
		// router.get('/best', isLoggedIn, (req, res) => res.render("bestTipster"));
		// router.get('/worst', isLoggedIn, (req, res) => res.render("worstTipster"));
		// router.get('/history', isLoggedIn, (req, res) => res.render("history"));

		// auth with facebook
		router.get('/auth/facebook',
			passport.authenticate('facebook', {
				scope: ['email']
			})
		);

		// callback route for facebook to redirect to
		// handle control to passport to use code to grab profile info
		router.get('/auth/facebook/callback', passport.authenticate('facebook', {
			successRedirect: '/home',
			failureRedirect: '/',
			session: true
		}));

		// auth logout
		router.get('/logout', function(req, res) {
			req.logOut();
			req.session.destroy(function() {
				res.redirect('/');
			});
		});

		return router;
	}
};