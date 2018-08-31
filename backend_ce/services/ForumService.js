module.exports = class ForumService {
  constructor(knex) {
    this.knex = knex;
  }

  //----------four services about forum posts----------

  //ok, can getPost
  getPosts() {
    return this.knex
      .count('forumComments.post_id')
      .column(
        'forumPosts.id',
        'forumPosts.user_id',
        'forumPosts.title',
        'forumPosts.content',
        'forumPosts.image_path',
        'forumPosts.created_at'
      )
      .from('forumPosts')
      .join('forumComments', 'forumComments.post_id', 'forumPosts.id')
      .groupBy('forumPosts.id') //why forumPosts.id instead of forumComments.posts_id?
      .orderBy('forumPosts.created_at', 'aesc')
      .then(aboveresult => {
        return Promise.all(
          aboveresult.map(post => {
            return this.knex
              .select('users.id', 'users.display_name', 'users.profilePic')
              .from('users')
              .where('users.id', post.user_id)
              .then(user => {
                return {
                  user: user[0],
                  post
                };
              });
          })
        );
      });
  }
  //ok, can createPost to db
  createPost(user_id, title, content, image_path) {
    const data = {
      user_id,
      title,
      content,
      image_path
    };
    return this.knex.insert(data).into('forumPosts');
  }

  getPostDetails(postid) {
    //not yet built
    return this.knex
      .count('forumComments.post_id')
      .column(
        'forumPosts.id',
        'forumPosts.user_id',
        'forumPosts.title',
        'forumPosts.content',
        'forumPosts.image_path',
        'forumPosts.created_at'
      )
      .from('forumPosts')
      .join('forumComments', 'forumComments.post_id', 'forumPosts.id')
      .groupBy('forumPosts.id')
      .orderBy('forumPosts.created_at', 'aesc');
  }

  //   ///////////////////////
  //   app.get('/posts/:id', authHelpers.loginRequired, async (req, res) => {
  //   const id = req.params.id;
  //   const post = await knex('forumPosts').where('id', id);
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

  delPost(post_id, user_id) {
    //delpost but not del post's commments(?)
    return this.knex('posts')
      .where('posts.id', post_id) // .where('posts.user_id', req.user.id)
      .where('posts.user_id', user_id)
      .delete();
  }

  //----------two services about forum's indiv posts' comments----------
  //ok, can createComments to db
  postComments(user_id, post_id, content, image_path) {
    const data = {
      user_id,
      post_id,
      content,
      image_path
    };
    return this.knex.insert(data).into('forumComments');
  }

  // delComment(posts_id, comments_id, user_id) {
  delComment(posts_id, comments_id) {
    return (
      this.knex('forumComments')
        .where('post_id', posts_id)
        .andWhere('id', comments_id)
        // .andWhere('user_id', user_id) // .where('user_id', req.user.id)
        .del()
    );
  }

  //----------two services about getting my post and my comments (with identifying user id)----------
  getMyPosts(user_id) {
    return this.knex
      .select()
      .from('forumPosts')
      .where('user_id', user_id);
  }

  getMyComments(user_id) {
    return this.knex
      .select()
      .from('forumComments')
      .where('user_id', user_id);
  }
};
