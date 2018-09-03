const express = require('express');
const jwt = require('jwt-simple');
const axios = require('axios');
const bcrypt = require('../utils/bcrypt');

module.exports = class AuthRouter {
	constructor(authService) {
		this.authService = authService;
	}

	router() {
		let router = express.Router();
		router.post('/login', this.localLogin.bind(this));
		router.post('/signup', this.localSignUp.bind(this));
		router.post('/login/facebook', this.facebookLogin.bind(this));
		return router;
	}

	async localLogin(req, res) {
		try {
			if (!req.body.email || !req.body.password) {
				res.status(401).send('Invalid email address or password');
			}
			const email = req.body.email;
			const password = req.body.password;
			const userInfo = await this.authService.localLogin(email);
			if (userInfo[0]) {
				const passwordMatch = await bcrypt.checkPassword(
					password,
					userInfo[0].password
				);
				if (!passwordMatch) {
					return res.status(401).send('Incorrect password');
				}
				const payload = {
					id: userInfo[0].id,
					role: userInfo[0].role
				};
				const token = jwt.encode(payload, process.env.JWT_SECRET);
				console.log('Local Login User Id: ' + userInfo[0].id);
				return res.json({
					success: true,
					id: userInfo[0].id,
					displayName: userInfo[0].display_name,
					profilePic: userInfo[0].profilePic,
					role: userInfo[0].role,
					sQuestionCredit: userInfo[0].s_questionsCanAsk,
					iBalance: userInfo[0].i_balance,
					iEducation: userInfo[0].i_education,
					iYearOfCodeExp: userInfo[0].i_year_codeExp,
					iIntroduction: userInfo[0].i_introduction,
					iNumRating: userInfo[0].i_num_rating,
					iTotalRating: userInfo[0].i_total_rating,
					token
				});
			} else {
				return res.status(401).send('User not found');
			}
		} catch (err) {
			// console.error(err);
			return res.status(401).json({
				success: false,
				message: err.message,
				error: err
			});
		}
	}

	async localSignUp(req, res) {
		try {
			const duplicateEmail = await this.authService.checkValidEmail(
				req.body.email
			);
			if (duplicateEmail.length > 0) {
				return res.status(401).send('That email address has already been used');
			}
			const hash = await bcrypt.hashPassword(req.body.password);
			const newUser = await this.authService.localSignUp(
				req.body.displayName,
				req.body.email,
				hash,
				req.body.role
			);
			const userInfo = await this.authService.getUserInfoById(newUser[0]);
			const payload = {
				id: newUser[0],
				role: userInfo[0].role
			};
			const token = jwt.encode(payload, process.env.JWT_SECRET);

			return res.json({
				success: true,
				id: newUser[0],
				displayName: userInfo[0].display_name,
				role: userInfo[0].role,
				token
			});
		} catch (err) {
			// console.error(err);
			return res.status(401).json({
				success: false,
				message: err.message,
				error: err
			});
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
					const user = await this.authService.findUserByFacebookId(
						data.data.id
					);
					if (user[0]) {
						userId = user[0].id;
					} else {
						const newUser = await this.authService.facebookSignUp(
							data.data.name,
							data.data.id,
							data.data.email,
							data.data.picture.data.url,
							req.body.role
						);
						console.log('New User Id: ' + newUser);
						userId = newUser[0];
					}
					const userInfo = await this.authService.getUserInfoById(userId);
					const payload = {
						id: userId,
						role: userInfo[0].role
					};

					// Return the JWT token after checking
					const token = jwt.encode(payload, process.env.JWT_SECRET);
					console.log('Facebook Login User Id: ' + userId);
					return res.json({
						success: true,
						id: userId,
						displayName: userInfo[0].display_name,
						profilePic: userInfo[0].profilePic,
						role: userInfo[0].role,
						sQuestionCredit: userInfo[0].s_questionsCanAsk,
						iBalance: userInfo[0].i_balance,
						iEducation: userInfo[0].i_education,
						iYearOfCodeExp: userInfo[0].i_year_codeExp,
						iIntroduction: userInfo[0].i_introduction,
						iNumRating: userInfo[0].i_num_rating,
						iTotalRating: userInfo[0].i_total_rating,
						token
					});
				} else {
					return res.status(401).send('Invalid facebook access token');
				}
			} catch (err) {
				return res.status(401).json({
					success: false,
					message: err.message,
					error: err
				});
			}
		} else {
			return res.sendStatus(401);
		}
	}
};
