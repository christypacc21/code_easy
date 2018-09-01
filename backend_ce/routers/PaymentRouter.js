require('dotenv').config();
const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;
const express = require('express');
const stripe = require('stripe')(keySecret);



module.exports = class PaymentRouter {
	constructor(paymentService) {
		this.paymentService = paymentService;
	}

	router() {
		let router = express.Router();
		router.post('/charge', this.postCharge.bind(this));
		return router;
	}

	postCharge(req, res) {
		let amount = 500;

		stripe.customers.create({
			email: req.body.stripeEmail,
			source: req.body.stripeToken
		})
			.then(customer =>
				stripe.charges.create({
					amount,
					description: 'Sample Charge',
					currency: 'usd',
					customer: customer.id
				}))
			.then(charge => res.json(charge))
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
				.then((questionInfo) => res.json({
					success: true,
					questionInfo
				}))
				.catch((err) => res.status(500).json({
					success: false,
					message: err.message,
					error: err
				}));
		} else {
			return this.questionService.createQuestion(req.user.id, req.body.content, null, req.body.skills)
				.then((questionInfo) => res.json({
					success: true,
					questionInfo
				}))
				.catch((err) => res.status(500).json({
					success: false,
					message: err.message,
					error: err
				}));
		}
	}
};