const express = require('express');
const jwt = require('jwt-simple');
// const passport = require('passport');
const axios = require('axios');
const bcrypt = require('../utils/bcrypt');
require('dotenv').config();

module.exports = class UserRouter {
	constructor(userService) {
		this.userService = userService;
	}

	router() {
		let router = express.Router();
		router.post('/login', this.localLogin.bind(this));
		router.post('/signup', this.localSignUp.bind(this));
		router.post('/login/facebook', this.facebookLogin.bind(this));
		// router.get('/user/profilePic', passport.authenticate('jwt', process.env.JWT_SESSION), this.getProfilePic.bind(this));
		// router.post('/user/profilePic', passport.authenticate('jwt', process.env.JWT_SESSION), this.uploadProfilePic.bind(this));
		return router;
	}

	async localLogin(req, res) {
		try {
			if (!req.body.email || !req.body.password) {
				res.status(401).send('Invalid email address or password');
			}
			const email = req.body.email;
			const password = req.body.password;
			const result = await this.userService.localLogin(email);
			if (result[0]) {
				const passwordMatch = await bcrypt.checkPassword(password, result[0].password);
				if (!passwordMatch) {
					return res.status(401).send('Incorrect password');
				}
				const payload = {
					id: result[0].id,
					role: result[0].role
				};
				const token = jwt.encode(payload, process.env.JWT_SECRET);

				res.json({
					token: token,
					role: result[0].role
				});
			} else {
				res.status(401).send('User not found');
			}
		} catch (err) {
			res.sendStatus(401).json(err);
		}
	}

	async localSignUp(req, res) {
		try {
			const duplicateEmail = await this.userService.checkValidEmail(req.body.email);
			if (duplicateEmail.length > 0) {
				return res.status(401).send('That email address has already been used');
			}
			const hash = await bcrypt.hashPassword(req.body.password);
			const newUser = await this.userService.localSignUp(req.body.displayName, req.body.email, hash, req.body.role);
			const userInfo = await this.userService.getUserInfoById(newUser[0]);
			const payload = {
				id: newUser[0],
				role: userInfo[0].role
			};
			const token = jwt.encode(payload, process.env.JWT_SECRET);

			res.json({
				token,
				role: userInfo[0].role
			});
		} catch (err) {
			res.sendStatus(401).json(err);
		}
	}

	async facebookLogin(req, res) {
		if (req.body.access_token) {
			const accessToken = req.body.access_token;
			try {
				const data = await axios.get(`https://graph.facebook.com/me?fields=name,email,picture.width(720).height(720)&access_token=${accessToken}`);
				// console.log(data.data);
				if (!data.data.error) {
					let userId;
					const user = await this.userService.findUserByFacebookId(data.data.id);
					if (user[0]) {
						userId = user[0].id;
					} else {
						const newUser = await this.userService.facebookSignUp(data.data.name, data.data.id, data.data.email, data.data.picture.data.url, req.body.role);
						console.log('New User Id: ' + newUser);
						userId = newUser[0];
					}
					const userInfo = await this.userService.getUserInfoById(userId);
					const payload = {
						id: userId,
						role: userInfo[0].role
					};

					// Return the JWT token after checking
					const token = jwt.encode(payload, process.env.JWT_SECRET);
					console.log('Facebook Login User Id: ' + userId);
					res.json({
						token,
						role: userInfo[0].role
					});
				} else {
					res.status(401).send('Invalid facebook access token');
				}
			} catch (err) {
				res.sendStatus(401).json(err);
			}
		} else {
			res.sendStatus(401);
		}
	}

	// getProfilePic(req, res) {
	// 	this.userService.getProfilePic(req.user.id)
	// 		.then((result) => {
	// 			res.json({
	// 				profilePic: result[0]
	// 			});
	// 		});
	// }

	// uploadProfilePic(req, res) {
	// 	this.userService.uploadProfilePic(req.user.id, req.body)
	// 		.then((result) => {
	// 			res.json(result);
	// 		});
	// }
};