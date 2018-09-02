exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('forumPosts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('forumPosts').insert([
        {
          id: 1,
          user_id: 1,
          title: 'fPost1',
          content: 'forumpost1content',
          image_path:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKVZBRYd91-FaURMiE2v39n3ptc1F3PiXLncVYDYiSksS4Xzo'
        },
        {
          id: 2,
          user_id: 2,
          title: 'fPost2',
          content: 'forumpost2content',
          image_path:
            'https://amp.businessinsider.com/images/5b05d5001ae66218008b45a2-750-500.jpg'
        },
        {
          id: 3,
          user_id: 3,
          title: 'fPost3',
          content: 'forumpost3content',
          image_path: '3image_pathlollol'
        },
        {
          id: 4,
          user_id: 4,
          title: 'fPost4',
          content: 'forumpost4content',
          image_path:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKVZBRYd91-FaURMiE2v39n3ptc1F3PiXLncVYDYiSksS4Xzo'
        },
        {
          id: 5,
          user_id: 5,
          title: 'fPost5',
          content: 'forumpost5content',
          image_path:
            'https://amp.businessinsider.com/images/5b05d5001ae66218008b45a2-750-500.jpg'
        },
        {
          id: 6,
          user_id: 2,
          title: 'fPost6',
          content: 'forumpost6content',
          image_path: '3image_pathlollol'
        },
        {
          id: 7,
          user_id: 8,
          title: 'fPost7',
          content: 'forumpost7content',
          image_path:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKVZBRYd91-FaURMiE2v39n3ptc1F3PiXLncVYDYiSksS4Xzo'
        },
        {
          id: 8,
          user_id: 7,
          title: 'fPost8',
          content: 'forumpost8content',
          image_path:
            'https://amp.businessinsider.com/images/5b05d5001ae66218008b45a2-750-500.jpg'
        },
        {
          id: 9,
          user_id: 7,
          title: 'fPost9',
          content: 'forumpost9content',
          image_path: '9image_pathlollol'
        },
        {
          id: 10,
          user_id: 7,
          title: 'fPost10',
          content: 'forumpost10content',
          image_path: '10image_pathlollol'
        },
        {
          id: 11,
          user_id: 8,
          title: 'fPost11',
          content: 'forumpost11content',
          image_path: '11image_pathlollol'
        },
        {
          id: 12,
          user_id: 8,
          title: 'fPost12',
          content: 'forumpost12content',
          image_path: '12image_pathlollol'
        },
        {
          id: 13,
          user_id: 2,
          title: 'fPost13',
          content: 'forumpost13content',
          image_path: '13image_pathlollol'
        },
        {
          id: 14,
          user_id: 7,
          title: 'fPost14',
          content: 'forumpost14content',
          image_path: '14image_pathlollol'
        },
        {
          id: 15,
          user_id: 8,
          title: 'fPost15',
          content: 'forumpost15content',
          image_path: '15image_pathlollol'
        },
        {
          id: 16,
          user_id: 8,
          title: 'fPost16',
          content: 'forumpost16content',
          image_path: '16image_pathlollol'
        },
        {
          id: 17,
          user_id: 6,
          title: 'fPost17',
          content: 'forumpost17content',
          image_path: '17image_pathlollol'
        },
        {
          id: 18,
          user_id: 4,
          title: 'fPost18',
          content: 'forumpost18content',
          image_path: '18image_pathlollol'
        }
      ]);
    });
};
