const { UserService } = require('../../services');
const knexFile = require('../../knexfile')['testing'];
const knex = require('knex')(knexFile);

describe('UserService', () => {
	let userService;
	let example = {
		education: 'UW',
		year_codeExp: 1,
		introduction: 'Hello',
		cert_path: null,
		skills: ['SQL', 'React'],
		id: 1
	};
	beforeEach(done => {
		userService = new UserService(knex);
		knex('instructors_skills')
			.del()
			.then(() => {
				knex('users').del();
			})
			.then(() => {
				knex('users').insert({
					id: 1,
					display_name: 'Instructor',
					email: 'instructor@gmail.com',
					password:
            '$2b$10$w6Z6abZ2D7VfdVWzNz2n9e3b3yotH8ioatXrXB24lbwY1fvNDZUpu',
					phone: '12345678',
					role: 'instructor'
				});
			})
			.then(() => done());
	});

	it('should support instructorSignUp and getProfile method', done => {
		userService
			.instructorSignUp(
				example.education,
				example.year_codeExp,
				example.introduction,
				example.cert_path,
				JSON.stringify(example.skills),
				example.id
			)
			.then(() => userService.getProfile(example.id))
			.then(data => {
				expect(data.iEducation).toEqual('UW');
				expect(data.iYearOfCodeExp).toEqual(1);
				expect(data.iIntroduction).toEqual('Hello');
				expect(data.instructorInfo).toEqual([
					Object({ skill: 'SQL' }),
					Object({ skill: 'React' })
				]);
				done();
			});
	});
});
