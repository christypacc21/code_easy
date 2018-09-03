// const USERS = require('./tables').USERS;
// const forumPosts = require('./tables').forumPosts;
// const forumComments = require('./tables').forumComments;

module.exports = class ForumService {
  constructor(knex) {
    this.knex = knex;
  }

  //----------three services about forum posts----------
  getPosts() {
    return this.knex
      .select('*')
      .from('users')
      .rightJoin('forumPosts', 'users.id', 'forumPosts.user_id')
      .then(posts => {
        return this.knex
          .count('forumComments.post_id')
          .column('forumPosts.id')
          .from('forumPosts')
          .leftJoin('forumComments', 'forumComments.post_id', 'forumPosts.id')
          .groupBy('forumPosts.id')
          .orderBy('forumPosts.id', 'aesc')
          .then(count => {
            return {
              posts,
              count
            };
          });
      });
  }

  //ok, can createPost to db with authenToken
  createPost(user_id, title, content, image_path) {
    const data = {
      user_id,
      title,
      content,
      image_path
    };
    return this.knex.insert(data).into('forumPosts');
  }

  //ok, can getPostDetails from db
  getPostDetails(post_id) {
    //  getPostDetails(post_id, user_id) {
    return this.knex
      .select('*')
      .from('forumPosts')
      .where('forumPosts.id', post_id)

      .then(postDetails => {
        return this.knex
          .select('*')
          .from('forumComments')
          .where('forumComments.post_id', post_id)
          .then(comments => {
            return {
              postDetails: postDetails[0],
              comments
            };
          });
      });
  }

  //----------two services about forum's indiv posts' comments----------
  //ok, can createComments to db with authenToken
  postComments(user_id, post_id, content, image_path) {
    const data = {
      user_id,
      post_id,
      content,
      image_path
    };
    return this.knex.insert(data).into('forumComments');
  }

  //ok, can delComments from db with authenToken
  delComment(comments_id, user_id) {
    return this.knex('forumComments')
      .where('id', comments_id)
      .where('user_id', user_id)
      .del();
  }

  //----------two services about getting my post and my comments (with identifying user id)----------
  //ok, can getMyPosts from db with count and authenToken
  getMyPosts(user_id) {
    return this.knex('forumPosts')
      .where('forumPosts.user_id', user_id)
      .count('forumComments.post_id')
      .column(
        'forumPosts.id',
        'forumPosts.user_id',
        'forumPosts.image_path',
        'forumPosts.title',
        'forumPosts.content',
        'forumPosts.created_at'
      )
      .leftJoin('forumComments', 'forumComments.post_id', 'forumPosts.id')
      .groupBy('forumPosts.id')
      .orderBy('forumPosts.id', 'aesc');
  }

  //ok, can getMyComments from db with authenToken
  getMyComments(user_id) {
    return this.knex
      .select()
      .from('forumComments')
      .where('user_id', user_id);
  }
};
