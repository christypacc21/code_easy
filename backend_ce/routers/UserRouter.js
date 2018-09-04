const express = require('express');

module.exports = class UserRouter {
	constructor(userService) {
		this.userService = userService;
	}

	router() {
		let router = express.Router();
		router.post('/instructor/signup', this.instructorSignUp.bind(this));
		router.get('/user/profile', this.getProfile.bind(this));
		router.post('/user/profilePic', this.uploadProfilePic.bind(this));
		return router;
	}

	instructorSignUp(req, res) {
		if (req.files != null) {
			const inputFile = req.files.inputFile;
			const filePath =
        'images/instructor/' +
        req.user.id +
        '_' +
        Date.now() +
        '_' +
        inputFile.name +
        '.jpg';
			inputFile.mv(__dirname + '/../public/' + filePath, err => {
				if (err) return res.status(500).send(err);
			});
			return this.userService
				.instructorSignUp(
					req.body.education,
					req.body.yearCodeExp,
					req.body.introduction,
					filePath,
					req.body.skills,
					req.user.id
				)
				.then(data =>
					res.json({
						success: true,
						instructorInfo: data
					})
				)
				.catch(err =>
					res.status(500).json({
						success: false,
						message: err.message,
						error: err
					})
				);
		} else {
			return this.userService
				.instructorSignUp(
					req.body.education,
					req.body.yearCodeExp,
					req.body.introduction,
					null,
					req.body.skills,
					req.user.id
				)
				.then(data =>
					res.json({
						success: true,
						instructorInfo: data
					})
				)
				.catch(err =>
					res.status(500).json({
						success: false,
						message: err.message,
						error: err
					})
				);
		}
	}

	getProfile(req, res) {
		return this.userService
			.getProfile(req.user.id)
			.then(data =>
				res.json({
					success: true,
					profile: data
				})
			)
			.catch(err =>
				res.status(500).json({
					success: false,
					message: err.message,
					error: err
				})
			);
	}

	uploadProfilePic(req, res) {
		return this.userService
			.uploadProfilePic(req.user.id, req.body)
			.then(data =>
				res.json({
					success: true,
					profilePic: data[0]
				})
			)
			.catch(err =>
				res.status(500).json({
					success: false,
					message: err.message,
					error: err
				})
			);
	}
};
