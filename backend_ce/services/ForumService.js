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
      .join('users', 'users.id', 'forumPosts.user_id')
      .groupBy('forumPosts.id') //?
      .orderBy('forumPosts.created_at', 'aesc')
      .count('forumComments.post_id'); //for counting how many comments the post has(?)
  }

  createPost() {
    const data = {
      user_id: req.user.id,
      title: req.body.title,
      content: req.body.content,
      image_path: null,
    }
    return this.knex
    .insert(data)
    .into('forumPosts')
  }

  // getPostDetails() {
  //   return this.knex;
  // }

  // delPost() {
  //   return this.knex;
  // }

  //----------two services about forum's indiv posts' comments----------
  postComments() {
    const data = {
      user_id: req.user.id,
      post_id: req.params.id,
      content: req.body.content,
      image_path: null,
    }
    return this.knex
    .insert(data)
    .into('forumComments');
  }

  delComments() {
    return this.knex
    .select()
    .from('forumComments')
    .where('id', req.params.comments_id)
    .where('user_id', req.user.id)
    .delete()
  }

  //----------two services about getting my post and my comments (with identifying user id)----------
  getMyPosts() {
    return this.knex;
  }
  getMyComments() {
    return this.knex('forumComments')
      .where('user_id', req.user.id)
      .then(comments => {
        res.json(comments);
      });
  }
};

