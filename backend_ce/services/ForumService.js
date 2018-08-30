module.exports = class ForumService {
  constructor(knex) {
    this.knex = knex;
  }

  //----------four services about forum posts----------

  getPosts() {
    // let sort = 'forumPosts.created_at';
    // if (req.query.sort != null) {
    //     sort = req.query.sort;
    //   }
    return this.knex
      .select('*')
      .from('forumPosts')
      .join('users', 'users.id', 'forumPosts.user_id');
    //.order
  }

  createPost() {
    return this.knex;
  }

  getPostDetails() {
    return this.knex;
  }

  delPost() {
    return this.knex;
  }

  //----------two services about forum's indiv posts' comments----------
  postComments() {
    return this.knex;
  }

  delComments() {
    return this.knex;
  }
  //----------two services about getting my post and my comments (with identifying user id)----------
  getMyPosts() {
    return this.knex;
  }
  getMyComments() {
    return this.knex;
  }
};

// app.get('/myadvice', authHelpers.loginRequired, (req, res) => {
//   knex('advices')
//     .where('user_id', req.user.id)
//     .then(advices => {
//       res.render('myadvice', { advices: advices });
//     });
// });
