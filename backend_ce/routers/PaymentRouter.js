require('dotenv').config();
const keySecret = process.env.STRIPE_SECRET_KEY;
const express = require('express');
const stripe = require('stripe')(keySecret);

module.exports = class PaymentRouter {
	constructor(paymentService) {
		this.paymentService = paymentService;
	}

	router() {
		let router = express.Router();
		router.post('/charge', this.postCharge.bind(this));
		router.get('/student', this.getRecord.bind(this));
		return router;
	}

	postCharge(req, res) {
		console.log('payment req: ', req.body);
		stripe.charges
			.create({
				currency: 'hkd',
				amount: req.body.amount,
				description: req.body.description,
				source: req.body.token != null ? req.body.token.id : null
			})
			.then(charge => {
				if (charge.paid) {
					console.log('charge: ', charge);
					return this.paymentService
						.addCredit(
							req.user.id,
							charge.description,
							charge.amount,
							charge.id
						)
						.then(totalQuestionCredits => {
							res.json({
								success: true,
								amount: charge.amount,
								receipt: charge.id,
								totalQuestionCredits: totalQuestionCredits[0]
							});
						});
				}
			})
			.catch(err => {
				console.log('payment 2 - err', err);
				res.status(400).json({
					success: false,
					message: err.message,
					error: err
				});
			});
	}

	getRecord(req, res) {
		return this.paymentService
			.getRecord(req.user.id)
			.then(data =>
				res.json({
					success: true,
					purchaseRecord: data
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
