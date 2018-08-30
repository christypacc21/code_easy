const express = require('express');
const jwt = require('jwt-simple');
const axios = require('axios');
const bcrypt = require('../utils/bcrypt');
const authClass = require('../utils/auth');
const auth = authClass();

module.exports = class UserRouter {
	constructor(userService) {
		this.userService = userService;
	}

	router() {
		let router = express.Router();
		router.post('/login', this.localLogin.bind(this));
		router.post('/signup', this.localSignUp.bind(this));
		router.post('/login/facebook', this.facebookLogin.bind(this));
		router.post(
			'/instructor/signup',
			auth.authenticate(),
			this.instructorSignUp.bind(this)
		);
		router.get(
			'/user/profilePic',
			auth.authenticate(),
			this.getProfilePic.bind(this)
		);
		router.post(
			'/user/profilePic',
			auth.authenticate(),
			this.uploadProfilePic.bind(this)
		);
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
				const passwordMatch = await bcrypt.checkPassword(
					password,
					result[0].password
				);
				if (!passwordMatch) {
					return res.status(401).send('Incorrect password');
				}
				const payload = {
					id: result[0].id,
					role: result[0].role
				};
				const token = jwt.encode(payload, process.env.JWT_SECRET);

				return res.json({
					id: result[0].id,
					token: token,
					role: result[0].role
				});
			} else {
				return res.status(401).send('User not found');
			}
		} catch (err) {
			console.error(err);
			return res.status(401).json(err);
		}
	}

	async localSignUp(req, res) {
		try {
			const duplicateEmail = await this.userService.checkValidEmail(
				req.body.email
			);
			if (duplicateEmail.length > 0) {
				return res.status(401).send('That email address has already been used');
			}
			const hash = await bcrypt.hashPassword(req.body.password);
			const newUser = await this.userService.localSignUp(
				req.body.displayName,
				req.body.email,
				hash,
				req.body.role
			);
			const userInfo = await this.userService.getUserInfoById(newUser[0]);
			const payload = {
				id: newUser[0],
				role: userInfo[0].role
			};
			const token = jwt.encode(payload, process.env.JWT_SECRET);

			return res.json({
				id: newUser[0],
				token,
				role: userInfo[0].role
			});
		} catch (err) {
			console.error(err);
			return res.status(401).json(err);
		}
	}

	async facebookLogin(req, res) {
		if (req.body.access_token) {
			const accessToken = req.body.access_token;
			try {
				const data = await axios.get(
					`https://graph.facebook.com/me?fields=name,email,picture.width(720).height(720)&access_token=${accessToken}`
				);
				// console.log(data.data);
				if (!data.data.error) {
					let userId;
					const user = await this.userService.findUserByFacebookId(
						data.data.id
					);
					if (user[0]) {
						userId = user[0].id;
					} else {
						const newUser = await this.userService.facebookSignUp(
							data.data.name,
							data.data.id,
							data.data.email,
							data.data.picture.data.url,
							req.body.role
						);
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
					return res.json({
						id: userId,
						token,
						role: userInfo[0].role
					});
				} else {
					return res.status(401).send('Invalid facebook access token');
				}
			} catch (err) {
				return res.status(401).json(err);
			}
		} else {
			return res.sendStatus(401);
		}
	}

	instructorSignUp(req, res) {
		if (req.files != null) {
			const inputFile = req.files.inputFile;
			const filePath = 'images/instructor/' + inputFile.name;
			inputFile.mv(__dirname + '/../' + filePath, (err) => {
				if (err) return res.status(500).send(err);
			});
			return this.userService.instructorSignUp(req.body.education, req.body.yearCodeExp, req.body.introduction, filePath, req.body.skills, req.user.id)
				.then((data) => res.json(data))
				.catch((err) => res.status(500).json(err));
		} else {
			return this.userService.instructorSignUp(req.body.education, req.body.yearCodeExp, req.body.introduction, null, req.body.skills, req.user.id)
				.then((data) => res.json(data))
				.catch((err) => res.status(500).json(err));
		}
	}

	getProfilePic(req, res) {
		return this.userService
			.getProfilePic(req.user.id)
			.then(data =>
				res.json({
					profilePic: data[0]
				})
			)
			.catch(err => res.status(500).json(err));
	}

	uploadProfilePic(req, res) {
		return this.userService
			.uploadProfilePic(req.user.id, req.body)
			.then(data => res.json(data))
			.catch(err => res.status(500).json(err));
	}
};