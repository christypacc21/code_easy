// test db
// how to link to frontend
// frontend how mui gor react page/componentneeda use redux / async redux thunk???
const express = require('express');

module.exports = class ForumRouter {
  constructor(forumService) {
    this.forumService = forumService;
  }

  router() {
    let router = express.Router();
    router.get('/posts', this.getPosts.bind(this)); //get all posts
    router.post('/posts', this.createPost.bind(this)); //create(post) a new post
    router.get('/posts/:id', this.getPostDetails.bind(this)); //get individual posts and corresponding comments

    router.post('/posts/:id/comments', this.postComments.bind(this)); //create(post) a new comment
    router.delete(
      '/posts/:id/comments/:comments_id',
      this.delComment.bind(this)
    ); //delete a comment

    router.get('/myposts', this.getMyPosts.bind(this)); //get myPosts
    router.get('/mycomments', this.getMyComments.bind(this)); //get myComments

    return router;
  }
  //----------four routes about forum posts----------
  //???ok, can getPost from db //?why chut ng sai posts?
  getPosts(req, res) {
    // return this.forumService.getForumPosts(req.query.sort)
    return this.forumService
      .getPosts()
      .then(posts => res.json(posts))
      .catch(err => res.status(500).json(err));
  }

  //ok, can createPost to db with authenToken
  createPost(req, res) {
    return this.forumService
      .createPost(
        req.user.id,
        req.body.title,
        req.body.content,
        req.body.image_path
      )
      .then(() => {
        console.log(req.body);
        res.json({ success: true });
      })
      .catch(err => {
        console.log('createPost error: ', err);
        res.status(500).json(err);
      });
  }

  getPostDetails(req, res) {
    return this.forumService
      .getPostDetails(req.params.id, req.user.id)
      .then(postDetails => res.json(postDetails))
      .catch(err => res.status(500).json(err));
  }

  //----------two routes about forum's indiv posts' comments----------
  //ok, can createComments to db with authenToken
  postComments(req, res) {
    return this.forumService
      .postComments(
        req.user.id,
        req.params.id,
        req.body.content,
        req.body.image_path // filePath
      )
      .then(() => {
        console.log(req.body);
        res.json({ success: true });
      })
      .catch(err => {
        console.log('postComments error: ', err);
        res.status(500).json(err);
      });
  }

  //ok, can delComments from db with authenToken
  //tested in postman, only the authorized eprson can del comment, though unauthorized person if try to del comment dou wui chut success but actually he didnt deleted the comment
  delComment(req, res) {
    return this.forumService
      .delComment(req.params.comments_id, req.user.id)
      .then(() => res.json({ success: true }))
      .catch(err => {
        console.log('delComment error: ', err);
        res.status(500).json(err);
      });
  }
  //----------two routes about getting my post and my comments (with identifying user id)----------
  //ok, can getMyPosts from db with authenToken
  getMyPosts(req, res) {
    return this.forumService
      .getMyPosts(req.user.id)
      .then(myposts => res.json(myposts))
      .catch(err => {
        console.log('getMyPosts error: ', err);
        res.status(500).json(err);
      });
  }

  //ok, can getMyComments from db with authenToken
  getMyComments(req, res) {
    return this.forumService
      .getMyComments(req.user.id)
      .then(mycomments => res.json(mycomments))
      .catch(err => {
        console.log('getMyComments error:', err);
        res.status(500).json(err);
      });
  }
};
