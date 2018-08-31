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
  //ok, can createPost
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

  delPost() {
    //delpost but not del post's commments(?)
    return (
      this.knex('posts')
        .where('posts.id', req.params.id)
        // .where('posts.user_id', req.user.id)
        .where('posts.user_id', req.body.id)
        .delete()
    );
  }

  //----------two services about forum's indiv posts' comments----------
  //
  postComments(user_id, post_id, content, image_path) {
    const data = {
      user_id,
      post_id,
      content,
      image_path
    };
    return this.knex.insert(data).into('forumComments');
  }

  delComment() {
    return (
      this.knex
        .select()
        .from('forumComments')
        .where('id', req.params.comments_id)
        // .where('user_id', req.user.id)
        .where('user_id', req.body.id)
        .delete()
    );
  }

  //----------two services about getting my post and my comments (with identifying user id)----------
  getMyPosts() {
    return (
      this.knex
        .select()
        .from('forumPosts')
        // .where('user_id', req.user.id);
        .where('user_id', req.body.id)
    );
  }

  getMyComments() {
    return (
      this.knex
        .select()
        .from('forumComments')
        // .where('user_id', req.user.id);
        .where('user_id', req.body.id)
    );
  }
};
