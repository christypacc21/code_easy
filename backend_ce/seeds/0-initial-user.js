exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('users').del()
		.then(function() {
			// Inserts seed entries
			return knex('users').insert([
				{
				id: 1,
				display_name: 'Test1S',
				email: 'test1s@gmail.com',
				password: '$2b$10$w6Z6abZ2D7VfdVWzNz2n9e3b3yotH8ioatXrXB24lbwY1fvNDZUpu',
				phone: '12345678',
				s_questionsCanAsk: 11,
				role: 'student'},
				{
					id: 2,
					display_name: 'Test2S',
					email: 'test2s@gmail.com',
					password: '$2b$10$w6Z6abZ2D7VfdVWzNz2n9e3b3yotH8ioatXrXB24lbwY1fvNDZUpu',
					phone: '12345678',
					s_questionsCanAsk: 22,
					role: 'student'
				},
				{
					id: 3,
					display_name: 'Test3T',
					email: 'test3t@gmail.com',
					password: '$2b$10$w6Z6abZ2D7VfdVWzNz2n9e3b3yotH8ioatXrXB24lbwY1fvNDZUpu',
					phone: '12345678',
					i_balance: 33,
					role: 'student'
				},
		]);
		});
};