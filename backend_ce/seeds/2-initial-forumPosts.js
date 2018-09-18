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
          title: 'How to correctly unbind an element?',
          content: 'How to correctly unbind an element?Plz help and Thank You!',
          image_path: 'images/forumPosts/8_1536084354220_postIMG.jpg'
        },
        {
          // id: 2,
          user_id: 1,
          title: 'Date difference timer of current and past date in android',
          content:
            'I am trying to make a difference between current and past date which I am getting perfectly. I know its not that much complicated problem but I am not able to find a solution for it.',
          image_path: null
        },
        {
          // id: 3,
          user_id: 1,
          title: 'how to wrote this query with 3.4 MongoDB version',
          content:
            'I am new to MongoDb and would appreciate some help with this query. I wrote the following aggregation pipeline.I got the output with 3.6 version but 3.6 version some issues are there so if any possible wrote the query with 3.4 version any one suggest me',
          image_path: null
        },
        {
          // id: 4,
          user_id: 1,
          title: 'Migrate data between two SQL databases with identity column',
          content:
            "Here is the scenario... I've two databases(A & B) with same schema but different records.I'd like to transfer B's data into corresponding tables in DB A.Lets say we have tables named Question and Answer in both databases.",
          image_path: null
        },
        {
          // id: 5,
          user_id: 1,
          title: 'How to create yolo.cfg',
          content:
            "I want to use the YAD2K to detect the number(0-9).I've already train the number and use 'model.save' to save the model, 'model.save_weights' to save weights.",
          image_path: null
        }
        // {
        //   // id: 6,
        //   user_id: 1,
        //   title: 'How to set font using font chooser?',
        //   content:
        //     "I want to set the font of a GtkTextView to the one that a user chose using GtkFontChooserDialog. How can this be done? I've tried many ways but none of them work good enough or at all.",
        //   image_path: 'images/forumPosts/8_1536084354220_postIMG.jpg'
        // }
        // {
        //   // id: 7,
        //   user_id: 1,
        //   title: 'WordPress Cron Job import posts',
        //   content:
        //     'I am building a site to import products from an JSON feed, and then display them as posts in my site.I am using a cron job to run an import every day at 3am, but I have a question regarding the setup of it all.Would it be good practice to import the feed, create posts based on the feed and then populate the posts on the site ?',
        //   image_path: null
        // },
        // {
        //   // id: 8,
        //   user_id: 1,
        //   title: '[jquery]How do I add file uploads dynamically?',
        //   content:
        //     'I want to upload multiple files, so I want to add upload fields dynamically through jquery. Now I can do it if I have a button like "add another field", and append the new upload to the form, but I want to do it a bit differently.',
        //   image_path: 'images/forumPosts/8_1536084354220_postIMG.jpg'
        // }
        // {
        //   // id: 9,
        //   user_id: 1,
        //   title: 'fPost9',
        //   content: 'forumpost9content',
        //   image_path: 'images/forumPosts/8_1536084354220_postIMG.jpg'
        // },
        // {
        //   // id: 10,
        //   user_id: 1,
        //   title: 'fPost10',
        //   content: 'forumpost10content',
        //   image_path: 'images/forumPosts/8_1536084354220_postIMG.jpg'
        // },
        // {
        //   // id: 11,
        //   user_id: 1,
        //   title: 'fPost11',
        //   content: 'forumpost11content',
        //   image_path: 'images/forumPosts/8_1536084354220_postIMG.jpg'
        // }
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
