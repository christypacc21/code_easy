// test db
// how to link to frontend
// frontend how mui gor react page/componentneeda use redux / async redux thunk???
const express = require('express');
const app = express();
const authClass = require('../utils/auth');
const auth = authClass();

module.exports = class ForumRouter {
  constructor(forumService) {
    this.forumService = forumService;
  }

  // router.delete('/posts/:id', auth.authenticate(), this.delPost.bind(this));
  router() {
    let router = express.Router();
    router.get('/posts', this.getPosts.bind(this)); //get all posts
    router.post('/posts', this.createPost.bind(this)); //create(post) a new post
    router.get('/posts/:id', this.getPostDetails.bind(this)); //get individual posts and corresponding comments
    // router.delete('/posts/:id', this.delPost.bind(this)); //delete individual post (won't delete comments) (?)

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
  //ok, can getPost from db
  getPosts(req, res) {
    // return this.forumService.getForumPosts(req.query.sort)
    return this.forumService
      .getPosts()
      .then(posts => res.json(posts))
      .catch(err => res.status(500).json(err));
  }

  //ok, can createPost to db
  createPost(req, res) {
    return this.forumService
      .createPost(
        req.body.user_id, // req.user.id,
        req.body.title,
        req.body.content,
        req.body.image_path
      )
      .then(() => res.json({ success: true }))
      .catch(err => {
        console.log('createPost error: ', err);
        res.status(500).json(err);
      });
  }

  getPostDetails(req, res) {
    return this.forumService
      .getPostDetails(req.params.id) //.getPostDetails(req.params.id, req.user.id)
      .then(postDetails => res.json(postDetails))
      .catch(err => res.status(500).json(err));
  }

  // const post = await knex('forumPosts').where('forumPosts.id', req.params.id);
  // const comments = await knex('forumComments').where('forumComments.post_id', req.params.comments_id);

  // Promise.all([post, comments])
  // .then(results =>{
  //   post: result[0][0],
  //   comments: result[0]
  // })
  //   ///////////////////////
  //   app.get('/posts/:id', authHelpers.loginRequired, async (req, res) => {
  //   const id = req.params.id;
  //   const post = await knex('posts').where('id', id);
  //   const allAdvices = await knex('advices').where('post_id', id);

  //   Promise.all([post, allAdvices])
  //     .then(results => {
  //       for (let i = 0; i < results[1].length; i++) {
  //         results[1][i].isAdviceMine = (req.user.id === results[1][i].user_id);
  //       }
  //       if (results[1][0] != undefined) {
  //         res.render('postdetails', {
  //           details: results[0][0],
  //           advices: results[1],
  //           isMine: req.user.id == results[0][0].user_id, //abt button of update showing logic //first post in the array of "post"
  //           // isAdviceMine: req.user.id == results[1][0].user_id, //first advice in the array of "advices"
  //         });
  //       } else {
  //         res.render('postdetails', {
  //           details: results[0][0],
  //           advices: results[1],
  //           isMine: req.user.id == results[0][0].user_id, //abt button of update showing logic
  //         })
  //       }
  //       // .catch(err => console.log('opppspsspsps', err));
  //     });
  // });
  // ///////////////////////

  // delPost(req, res) {
  //   return (
  //     this.forumService
  //       // .delPost(req.params.id, req.body.user_id) // req.user.id,
  //       .delPost(req.params.id) // req.user.id,
  //       .then(() => res.json({ success: true }))
  //       .catch(err => {
  //         console.log('delPost error: ', err);
  //         res.status(500).json(err);
  //       })
  //   );
  // }

  //----------two routes about forum's indiv posts' comments----------
  //ok, can createComments to db
  postComments(req, res) {
    return this.forumService
      .postComments(
        req.body.user_id, // req.user.id,
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

  //ok, can delComments from db
  delComment(req, res) {
    return (
      this.forumService
        // .delComment(req.params.comments_id, req.body.user_id) // req.user.id,
        .delComment(req.params.comments_id) // req.user.id,
        .then(() => res.json({ success: true }))
        .catch(err => {
          console.log('delComment error: ', err);
          res.status(500).json(err);
        })
    );
  }
  //----------two routes about getting my post and my comments (with identifying user id)----------
  getMyPosts(req, res) {
    return this.forumService
      .getMyPosts(req.body.user_id) //req.user.id
      .then(myposts => res.json(myposts))
      .catch(err => {
        console.log('getMyPosts error: ', err);
        res.status(500).json(err);
      });
  }

  getMyComments(req, res) {
    return this.forumService
      .getMyComments(req.body.user_id) //req.user.id
      .then(mycomments => res.json(mycomments))
      .catch(err => {
        console.log('getMyComments error:', err);
        res.status(500).json(err);
      });
  }
};
