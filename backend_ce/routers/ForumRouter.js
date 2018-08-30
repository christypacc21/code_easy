const express = require('express');
const app = express();
const authClass = require('../utils/auth');
const auth = authClass();

module.exports = class ForumRouter {
  constructor(forumService) { // where does "forumService" come from? dun needa import from other folder?
    this.forumService = forumService;
  }

  router() {
    let router = express.Router();
    router.get('/posts', auth.authenticate(), this.getPosts.bind(this)); //get all posts
    router.post('/posts', auth.authenticate(), this.createPost.bind(this)); //create(post) a new post
    router.get(
      '/posts/:id',
      auth.authenticate(),
      this.getPostDetails.bind(this)
    ); //get individual posts and corresponding comments
    router.delete('/posts/:id', auth.authenticate(), this.delPost.bind(this)); //delete individual post (won't delete comments) (?)

    router.post('/comment', auth.authenticate(), this.postComments.bind(this)); //create(post) a new comment
    router.delete(
      '/posts/:id/comments/:comments_id',
      auth.authenticate(),
      this.delComment.bind(this)
    ); //delete a comment

    router.get('/myposts', auth.authenticate(), this.getMyPosts.bind(this)); //get myPosts
    router.get(
      '/mycomments',
      auth.authenticate(),
      this.getMyComments.bind(this)
    ); //get myComments

    return router;
  }

  //----------four routes about forum posts----------
  getPosts(req, res) {
    // return this.forumService.getForumPosts(req.query.sort)
    return this.forumService
      .getPosts()
      .then(posts => res.json(posts))
      .catch(err => res.status(500).json(err));
  }

  createPost(req, res) {
    return this.forumService
      .createPost()
      .then(data => {
        // res.send(data); //?
        res.redirect('/posts');
      })
      .catch(err => {
        console.log('createPost error: ', err);
        res.redirect('/posts');
      });
  }

  getPostDetails(req, res) {
    return this.forumService.getPostDetail();
    // .then(postDetails => res.json(postDetails))
    // .catch(err => res.status(500).json(err));
  }

  delPost(req, res) {
    return this.forumService.delPost().then(() => res.redirect('/posts/')); // needa /api/forum/posts?
  }

  //----------two routes about forum's indiv posts' comments----------
  postComments(req, res) {
    return this.forumService
      .postComments()
      .then(() => res.redirect('/posts/' + req.params.id)); //?
  }

  delComment(req, res) {
    return this.forumService
      .delComments()
      .then(() => res.redirect('/posts/' + req.params.id)); //?
  }
  //----------two routes about getting my post and my comments (with identifying user id)----------
  getMyPosts(req, res) {
    return this.forumService
      .getMyPosts()
      .then(myposts => res.json(myposts))
      .catch(err => {
        console.log('getMyPosts error: ', err);
        res.status(500).json(err); //can res.status n  res.redirect both exist?
        res.redirect('/posts');
      });
  }

  getMyComments(req, res) {
    return this.forumService
      .getMyComments()
      .then(mycomments => res.json(mycomments))
      .catch(err => {
        console.log('getMyComments error: ', err);
        res.status(500).json(err); //can res.status n  res.redirect both exist?
        res.redirect('/posts');
      });
  }
};
