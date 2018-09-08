const express = require('express');

module.exports = class HistoryRouter {
  constructor(historyService) {
    this.historyService = historyService;
  }

  router() {
    let router = express.Router();
    router.get('/gethistory', this.getHistory.bind(this));
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
};
