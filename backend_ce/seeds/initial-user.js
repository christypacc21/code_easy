exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('users').del()
		.then(function() {
			// Inserts seed entries
			return knex('users').insert([{
				id: 1,
				display_name: 'Test',
				email: 'test@gmail.com',
				password: '1234',
				phone: '12345678',
				propic_path: '',
				balance: 1000,
				role: 'student'
			}]);
		});
};