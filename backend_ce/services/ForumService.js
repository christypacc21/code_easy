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
      .orderBy('forumPosts.id', 'desc')
      .then(posts => {
        // console.log('posts', posts);
        const postInfoList = posts.map(post => {
          return this.knex
            .count('post_id')
            .from('forumComments')
            .where('post_id', post.id)
            .then(count => {
              // console.log('count', count[0].count);
              const postInfo = {
                post,
                count: count[0].count
              };
              // console.log('postInfo', postInfo);
              return postInfo;
            });
        });
        return Promise.all(postInfoList).then(postInfo => {
          return postInfo;
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
      .leftJoin('users', 'users.id', '=', 'forumPosts.user_id') //must leftJoin

      .then(postDetails => {
        return this.knex
          .select('*', 'forumComments.created_at as commentTime')
          .from('forumComments')
          .where('forumComments.post_id', post_id)
          .leftJoin('users', 'users.id', '=', 'forumComments.user_id')
          .orderBy('commentTime', 'aesc')
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
    console.log(data);
    return this.knex('forumComments').insert(data);
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
      .select(
        'forumComments.id as commentId',
        'forumComments.user_id as userId',
        'forumComments.post_id as postId',
        'forumComments.image_path as commentImagePath',
        'forumComments.content as commentContent',
        'forumPosts.content as postContent',
        'forumPosts.title as postTitle',
        'forumComments.created_at as commentTime',
        'forumPosts.created_at as postTime'
      )
      .from('forumComments')
      .where('forumComments.user_id', user_id)
      .leftJoin('forumPosts', 'forumPosts.id', 'forumComments.post_id');
  }
};
