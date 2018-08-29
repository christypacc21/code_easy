exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('users').del()
		.then(function() {
			// Inserts seed entries
			return knex('users').insert([{
				id: 1,
				display_name: 'Test',
				email: 'test@gmail.com',
				password: '$2b$10$w6Z6abZ2D7VfdVWzNz2n9e3b3yotH8ioatXrXB24lbwY1fvNDZUpu',
				phone: '12345678',
				s_questionsCanAsk: 10,
				role: 'student'
			}]);
		});
};