
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('forumComments').del()
    .then(function () {
      // Inserts seed entries
      return knex('forumComments').insert([
        {
          id: 1,
          user_id: 2,
          post_id: 1,
          content: "forumpost1content",
          image_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKVZBRYd91-FaURMiE2v39n3ptc1F3PiXLncVYDYiSksS4Xzo"
        },
        {
          id: 2,
          user_id: 3,
          post_id: 2,
          content: "forumpost1content",
          image_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKVZBRYd91-FaURMiE2v39n3ptc1F3PiXLncVYDYiSksS4Xzo"
        },
        {
          id: 3,
          user_id: 1,
          post_id: 3,
          content: "forumpost1content",
          image_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKVZBRYd91-FaURMiE2v39n3ptc1F3PiXLncVYDYiSksS4Xzo"
        },

      ]);
    });
};