const express = require('express');
const authClass = require('../utils/auth');
const auth = authClass();

module.exports = class QuestionRouter {
	constructor(questionService) {
		this.questionService = questionService;
	}

	router() {
		let router = express.Router();
		router.get(
			'/credit/check',
			auth.authenticate(),
			this.getCreditBalance.bind(this)
		);
		router.post(
			'/create',
			auth.authenticate(),
			this.postQuestion.bind(this)
		);
		return router;
	}

	getCreditBalance(req, res) {
		return this.questionService
			.checkCredit(req.user.id)
			.then(credit =>
				res.json({
					success: true,
					credit: credit
				})
			)
			.catch(err => res.status(500).json({
				success: false,
				message: err.message,
				error: err
			}));
	}

	postQuestion(req, res) {
		if (req.files != null) {
			const inputFile = req.files.inputFile;
			const filePath = 'images/question/' + inputFile.name;
			inputFile.mv(__dirname + '/../' + filePath, (err) => {
				if (err) return res.status(500).send(err);
			});
			return this.questionService.createQuestion(req.user.id, req.body.content, filePath, req.body.skills)
				.then((data) => res.json(data))
				.catch((err) => res.status(500).json(err));
		} else {
			return this.questionService.createQuestion(req.user.id, req.body.content, null, req.body.skills)
				.then((data) => res.json(data))
				.catch((err) => res.status(500).json(err));
		}
	}
};