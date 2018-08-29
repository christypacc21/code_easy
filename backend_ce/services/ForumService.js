module.exports = class ForumService {
  constructor(knex) {
    this.knex = knex;
  }

  getForumPosts() {
    // let sort = 'forumPosts.created_at';
    // if (req.query.sort != null) {
    //     sort = req.query.sort;
    //   }
    return this.knex
      .select("*")
      .from('forumPosts')
      .join('users', 'users.id', 'forumPosts.user_id')
    //.order
  }
};