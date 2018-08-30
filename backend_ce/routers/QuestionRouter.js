const express = require('express');
const authClass = require('../utils/auth');
const auth = authClass();

module.exports = class QuestionRouter {
	constructor(questionService) {
		this.questionService = questionService;
	}

	router() {
		let router = express.Router();
		router.post(
			'/create',
			auth.authenticate(),
			this.postQuestion.bind(this)
		);
		return router;
	}

	postQuestion(req, res) {
		if (req.files != null) {
			const inputFile = req.files.inputFile;
			const filePath = 'images/question/' + inputFile.name;
			inputFile.mv(__dirname + '/../' + filePath, (err) => {
				if (err) return res.status(500).send(err);
			});
			return this.questionService.createQuestion(req.body.education, req.body.yearCodeExp, req.body.introduction, filePath, req.body.skills, req.user.id)
				.then((data) => res.json(data))
				.catch((err) => res.status(500).json(err));
		} else {
			return this.userService.createQuestion(req.body.education, req.body.yearCodeExp, req.body.introduction, null, req.body.skills, req.user.id)
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