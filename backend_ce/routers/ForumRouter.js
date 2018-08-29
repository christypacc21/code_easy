const express = require('express');
// const passport = require('passport');
const app = express();
app.use(express.static('public'));
const axios = require('axios');
require('dotenv').config();

module.exports = class ForumRouter {
  constructor(forumService) {
    this.forumService = forumService;
  }

  router() {
    let router = express.Router();
    router.get('/posts', this.getPosts.bind(this));

    return router;
  }

  getPosts(req, res) {
    // return this.forumService.getForumPosts(req.query.sort)
    return this.forumService
      .getForumPosts()
      .then(posts => res.json(posts))
      .catch(err => res.status(500).json(err));
  }
};
