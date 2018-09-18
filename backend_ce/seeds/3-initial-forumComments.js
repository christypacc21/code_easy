exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('forumComments')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('forumComments').insert([
        {
          // id: 1,
          user_id: 2,
          post_id: 1,
          content:
            'If you need to support obsolete versions of jQuery without on, you can use delegate which is like the delegating form of on but with the arguments in a different order.',
          image_path: 'images/forumPosts/8_1536083754081_postIMG.jpg'
        },
        {
          // id: 2,
          user_id: 2,
          post_id: 3,
          content:
            "If you need to support obsolete browsers and obsolete versions of jQuery, the change event may not bubble and older jQuery didn't make it bubble for delegate(even though it did when hooked directly).",
          image_path: 'images/forumPosts/8_1536083754081_postIMG.jpg'
        },
        {
          // id: 3,
          user_id: 2,
          post_id: 1,
          content:
            'Click on the + icon next to "Intents" in the left side navigation.A popup will appear so click "Create intent". ',
          image_path: 'images/forumPosts/8_1536083754081_postIMG.jpg'
        },
        {
          // id: 4,
          user_id: 2,
          post_id: 2,
          content:
            'Click on the + icon next to "Intents" in the left side navigation.A popup will appear so click "Create intent".Then click on that intent from the Intents list on the left. ',
          image_path: 'images/forumPosts/8_1536083754081_postIMG.jpg'
        },
        {
          // id: 5,
          user_id: 2,
          post_id: 3,
          content:
            'Lorem ipsum dolor sit amet, in porta egestas, pede ut dui est et. Aptent sit aliquam dui aenean nonummy congue, ridiculus morbi, donec nibh neque habitasse non. ',
          image_path: null
        }
        // {
        //   // id: 6,
        //   user_id: 2,
        //   post_id: 2,
        //   content:
        //     'Mauris ultricies vestibulum cras laoreet porttitor tempor, eros velit pellentesque magna. Vel arcu sit interdum nec pharetra lacus, odio aliquet ultrices, praesent in in velit purus vestibulum. ',
        //   image_path: 'images/forumPosts/8_1536083754081_postIMG.jpg'
        // },
        // {
        //   // id: 7,
        //   user_id: 2,
        //   post_id: 3,
        //   content:
        //     'Mauris ultricies vestibulum cras laoreet porttitor tempor, eros velit pellentesque magna. Vel arcu sit interdum nec pharetra lacus, odio aliquet ultrices, praesent in in velit purus vestibulum. ',
        //   image_path: null
        // }
        // {
        //   // id: 8,
        //   user_id: 2,
        //   post_id: 9,
        //   content: 'forumcomment5content',
        //   image_path: 'images/forumPosts/8_1536083754081_postIMG.jpg'
        // },
        // {
        //   // id: 9,
        //   user_id: 2,
        //   post_id: 3,
        //   content: 'forumcomment6content',
        //   image_path: null
        // },
        // {
        //   // id: 10,
        //   user_id: 2,
        //   post_id: 3,
        //   content: 'forumcomment10content',
        //   image_path: 'images/forumPosts/8_1536083754081_postIMG.jpg'
        // }
        // {
        //   id: 11,
        //   user_id: 8,
        //   post_id: 4,
        //   content: 'forumcomment11content',
        //   image_path: 'images/forumPosts/8_1536083754081_postIMG.jpg'
        // },
        // {
        //   id: 12,
        //   user_id: 8,
        //   post_id: 8,
        //   content: 'forumcomment12content',
        //   image_path: null
        // },
        // {
        //   id: 13,
        //   user_id: 8,
        //   post_id: 6,
        //   content: 'forumcomment13content',
        //   image_path: 'images/forumPosts/8_1536083754081_postIMG.jpg'
        // },
        // {
        //   id: 14,
        //   user_id: 8,
        //   post_id: 7,
        //   content: 'forumcomment14content',
        //   image_path: 'images/forumPosts/8_1536083754081_postIMG.jpg'
        // },
        // {
        //   id: 15,
        //   user_id: 8,
        //   post_id: 7,
        //   content: 'forumcomment15content',
        //   image_path: 'images/forumPosts/8_1536083754081_postIMG.jpg'
        // }
      ]);
    });
};
