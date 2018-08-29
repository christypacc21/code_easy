exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('codingSkills').del()
		.then(function() {
			// Inserts seed entries
			return knex('codingSkills').insert([{
				id: 1,
				skill: 'Blockchain'
			},
			{
				id: 2,
				skill: 'Python'
			},
			{
				id: 3,
				skill: 'SQL'
			},
			{
				id: 4,
				skill: 'Machine Learning'
			},
			{
				id: 5,
				skill: 'HTML/CSS'
			},
			{
				id: 6,
				skill: 'JavaScript'
			},
			{
				id: 7,
				skill: 'TypeScript'
			},
			{
				id: 8,
				skill: 'React'
			},
			{
				id: 9,
				skill: 'Angular'
			},
			{
				id: 10,
				skill: 'Node.js'
			},
			{
				id: 11,
				skill: 'Java'
			},
			{
				id: 12,
				skill: 'Linus'
			},
			{
				id: 13,
				skill: 'XML'
			},
			{
				id: 14,
				skill: 'C++'
			},
			{
				id: 15,
				skill: 'C#'
			},
			{
				id: 16,
				skill: 'PHP'
			},
			{
				id: 17,
				skill: 'iOS/Swift'
			},
			{
				id: 18,
				skill: 'Ruby/Rails'
			}
			]);
		});
};