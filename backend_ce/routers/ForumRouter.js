const express = require('express');
const app = express();
const authClass = require('../utils/auth');
const auth = authClass();

module.exports = class ForumRouter {
  constructor(forumService) {
    this.forumService = forumService;
  }

  router() {
    let router = express.Router();
    router.get('/posts', auth.authenticate(), this.getPosts.bind(this)); //get all posts
    // router.post('/posts', auth.authenticate(), this.getPosts.bind(this)); //create(post) a new post
    // router.get('/posts/:id', auth.authenticate(),this.getPostDetails.bind(this)); //get individual posts and corresponding comments
    // router.delete('/posts/:id', auth.authenticate(),this.delPost.bind(this)); //delete individual post (won't delete comments)

    // router.post('/comment', auth.authenticate(),this.getPosts.bind(this)); //create(post) a new comment
    // router.delete('/posts/:id/comments/:comments_id', auth.authenticate(),this.getPosts.bind(this)); //delete a comment

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
