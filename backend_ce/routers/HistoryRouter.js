const express = require('express');

module.exports = class HistoryRouter {
	constructor(historyService) {
		this.historyService = historyService;
	}

	router() {
		let router = express.Router();
		router.get('/', this.getHistory.bind(this));
		router.get('/chatroomStatus/:id', this.getChatroomActive.bind(this));
		return router;
	}

	getHistory(req, res) {
		console.log(req.user.id);
		return this.historyService
			.getHistory(req.user.id)
			.then(history => res.json({ success: true, history }))
			.catch(err => {
				console.log('getHistory error:', err);
				res.status(500).json({
					success: false,
					message: err.message,
					error: err
				});
			});
	}

	getChatroomActive(req, res) {
		console.log('pppppppp' + req.params.id);
		return (
			this.historyService
			// .getChatroomActive(req.body.chatId) //?
				.getChatroomActive(req.params.id) //?
				.then(result => {
					const active = result[0].active;
					res.json({ success: true, active });
				})
				.catch(err => {
					res.status(500).json({
						success: false,
						message: err.message,
						error: err
					});
				})
		);
	}
};
