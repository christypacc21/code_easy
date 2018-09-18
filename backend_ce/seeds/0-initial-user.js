exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          // id: 1,
          display_name: 'Test1S',
          email: 'test1s@gmail.com',
          password:
            '$2b$10$w6Z6abZ2D7VfdVWzNz2n9e3b3yotH8ioatXrXB24lbwY1fvNDZUpu',
          phone: '12345678',
          s_questionsCanAsk: 1000,
          role: 'student'
        },
        {
          // id: 2,
          display_name: 'Test2T',
          email: 'test2t@gmail.com',
          password:
            '$2b$10$w6Z6abZ2D7VfdVWzNz2n9e3b3yotH8ioatXrXB24lbwY1fvNDZUpu',
          phone: '12345678',
          i_balance: 6000,
          i_education: 'CUHK Computer Science Master Degree',
          i_year_codeExp: 2,
          i_cert_path: 'images/forumPosts/8_1536084354220_postIMG.jpg',
          i_num_rating: 2,
          i_total_rating: 9,
          role: 'instructor'
        }
        // {
        //   // id: 3,
        //   display_name: 'Test3T',
        //   email: 'test3t@gmail.com',
        //   password:
        //     '$2b$10$w6Z6abZ2D7VfdVWzNz2n9e3b3yotH8ioatXrXB24lbwY1fvNDZUpu',
        //   phone: '12345678',
        //   i_balance: 33,
        //   role: 'instructor'
        // },
        // {
        //   // id: 4,
        //   display_name: 'Test4S',
        //   email: 'test4s@gmail.com',
        //   password:
        //     '$2b$10$w6Z6abZ2D7VfdVWzNz2n9e3b3yotH8ioatXrXB24lbwY1fvNDZUpu',
        //   phone: '12345678',
        //   s_questionsCanAsk: 11,
        //   role: 'student'
        // },
        // {
        //   // id: 5,
        //   display_name: 'Test5S',
        //   email: 'test5s@gmail.com',
        //   password:
        //     '$2b$10$w6Z6abZ2D7VfdVWzNz2n9e3b3yotH8ioatXrXB24lbwY1fvNDZUpu',
        //   phone: '12345678',
        //   s_questionsCanAsk: 22,
        //   role: 'student'
        // },
        // {
        //   // id: 6,
        //   display_name: 'Test6T',
        //   email: 'test6t@gmail.com',
        //   password:
        //     '$2b$10$w6Z6abZ2D7VfdVWzNz2n9e3b3yotH8ioatXrXB24lbwY1fvNDZUpu',
        //   phone: '12345678',
        //   i_balance: 33,
        //   role: 'instructor'
        // },
        // {
        //   // id: 7,
        //   display_name: 'Test7S',
        //   email: 'test7s@gmail.com',
        //   password:
        //     '$2b$10$w6Z6abZ2D7VfdVWzNz2n9e3b3yotH8ioatXrXB24lbwY1fvNDZUpu',
        //   phone: '12345678',
        //   s_questionsCanAsk: 11,
        //   role: 'student'
        // },
        // {
        //   // id: 8,
        //   display_name: 'Test8S',
        //   email: 'test8s@gmail.com',
        //   password:
        //     '$2b$10$w6Z6abZ2D7VfdVWzNz2n9e3b3yotH8ioatXrXB24lbwY1fvNDZUpu',
        //   phone: '12345678',
        //   s_questionsCanAsk: 22,
        //   role: 'student'
        // },
        // {
        //   // id: 9,
        //   display_name: 'Test9T',
        //   email: 'test9t@gmail.com',
        //   password:
        //     '$2b$10$w6Z6abZ2D7VfdVWzNz2n9e3b3yotH8ioatXrXB24lbwY1fvNDZUpu',
        //   phone: '12345678',
        //   i_balance: 33,
        //   role: 'instructor'
        // }
      ]);
    });
};
