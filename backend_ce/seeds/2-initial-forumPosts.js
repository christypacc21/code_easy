exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('forumPosts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('forumPosts').insert([
        {
          // id: 1,
          user_id: 1,
          title: 'fPost1',
          content: 'forumpost1content',
          image_path: 'images/forumPosts/8_1536084354220_postIMG.jpg'
        },
        {
          // id: 2,
          user_id: 2,
          title: 'fPost2',
          content: 'forumpost2content',
          image_path: 'images/forumPosts/8_1536084354220_postIMG.jpg'
        },
        {
          // id: 3,
          user_id: 3,
          title: 'fPost3',
          content: 'forumpost3content',
          image_path: 'images/forumPosts/8_1536084354220_postIMG.jpg'
        },
        {
          // id: 4,
          user_id: 4,
          title: 'fPost4',
          content: 'forumpost4content',
          image_path: 'images/forumPosts/8_1536084354220_postIMG.jpg'
        },
        {
          // id: 5,
          user_id: 5,
          title: 'fPost5',
          content: 'forumpost5content',
          image_path: null
        },
        {
          // id: 6,
          user_id: 2,
          title: 'fPost6',
          content: 'forumpost6content',
          image_path: 'images/forumPosts/8_1536084354220_postIMG.jpg'
        },
        {
          // id: 7,
          user_id: 8,
          title: 'fPost7',
          content: 'forumpost7content',
          image_path: null
        },
        {
          // id: 8,
          user_id: 7,
          title: 'fPost8',
          content: 'forumpost8content',
          image_path: 'images/forumPosts/8_1536084354220_postIMG.jpg'
        },
        {
          // id: 9,
          user_id: 7,
          title: 'fPost9',
          content: 'forumpost9content',
          image_path: 'images/forumPosts/8_1536084354220_postIMG.jpg'
        },
        {
          // id: 10,
          user_id: 7,
          title: 'fPost10',
          content: 'forumpost10content',
          image_path: 'images/forumPosts/8_1536084354220_postIMG.jpg'
        },
        {
          // id: 11,
          user_id: 8,
          title: 'fPost11',
          content: 'forumpost11content',
          image_path: 'images/forumPosts/8_1536084354220_postIMG.jpg'
        }
        // {
        //   // id: 12,
        //   user_id: 8,
        //   title: 'fPost12',
        //   content: 'forumpost12content',
        //   image_path: 'images/forumPosts/8_1536084354220_postIMG.jpg'
        // },
        // {
        //   // id: 13,
        //   user_id: 2,
        //   title: 'fPost13',
        //   content: 'forumpost13content',
        //   image_path: 'images/forumPosts/8_1536084354220_postIMG.jpg'
        // }
        // {
        //   // id: 14,
        //   user_id: 7,
        //   title: 'fPost14',
        //   content: 'forumpost14content',
        //   image_path: null
        // },
        // {
        //   // id: 15,
        //   user_id: 8,
        //   title: 'fPost15',
        //   content: 'forumpost15content',
        //   image_path: 'images/forumPosts/8_1536084354220_postIMG.jpg'
        // },
        // {
        //   // id: 16,
        //   user_id: 8,
        //   title: 'fPost16',
        //   content: 'forumpost16content',
        //   image_path: 'images/forumPosts/8_1536084354220_postIMG.jpg'
        // },
        // {
        //   // id: 17,
        //   user_id: 6,
        //   title: 'fPost17',
        //   content: 'forumpost17content',
        //   image_path: null
        // },
        // {
        //   // id: 18,
        //   user_id: 4,
        //   title: 'fPost18',
        //   content: 'forumpost18content',
        //   image_path: null
        // }
      ]);
    });
};
