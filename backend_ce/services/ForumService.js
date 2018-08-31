module.exports = class ForumService {
  constructor(knex) {
    this.knex = knex;
  }

  //----------four services about forum posts----------

  //???ok, can getPost from db //?why chut ng sai posts?
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

  //ok, can delComments from db
  // delComment(posts_id, comments_id, user_id) {
  delComment(comments_id) {
    return (
      this.knex('forumComments')
        .where('id', comments_id)
        // .andWhere('user_id', user_id)
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
