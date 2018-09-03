const express = require('express');

module.exports = class QuestionRouter {
	constructor(questionService) {
		this.questionService = questionService;
	}

	router() {
		let router = express.Router();
		router.get('/credit/check', this.getCreditBalance.bind(this));
		router.post('/create', this.postQuestion.bind(this));
		router.get('/list', this.getQuestion.bind(this));
		return router;
	}

	getCreditBalance(req, res) {
		return this.questionService
			.checkCredit(req.user.id)
			.then(credit =>
				res.json({
					success: true,
					credit
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

	postQuestion(req, res) {
		if (req.files != null) {
			const inputFile = req.files.inputFile;
			// need to check number of questions asked by user for unique image filename
			const filePath =
        'images/question/' + req.user.id + '_' + inputFile.name + '.jpg';
			inputFile.mv(__dirname + '/../' + filePath, err => {
				if (err) return res.status(500).send(err);
			});

			return this.questionService
				.createQuestion(
					req.user.id,
					req.body.content,
					filePath,
					req.body.skills
				)
				.then(questionInfo =>
					res.json({
						success: true,
						questionInfo
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
			return this.questionService
				.createQuestion(req.user.id, req.body.content, null, req.body.skills)
				.then(questionInfo =>
					res.json({
						success: true,
						questionInfo
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

	getQuestion(req, res) {
		return this.questionService
			.listQuestion(req.user.id)
			.then(questionList => {
				res.json({
					success: true,
					questionList
				});
			})
			.catch(err =>
				res.status(500).json({
					success: false,
					message: err.message,
					error: err
				})
			);
	}
};
