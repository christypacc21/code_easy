const USERS = require('./tables').USERS;
const CODINGSKILLS = require('./tables').CODINGSKILLS;
const INSTRUCTORS_SKILLS = require('./tables').INSTRUCTORS_SKILLS;

module.exports = class UserService {
	constructor(knex) {
		this.knex = knex;
	}

	async instructorSignUp(
		education,
		yearCodeExp,
		introduction,
		cert_path,
		skills,
		id
	) {
		try {
			await this.knex(USERS)
				.update({
					i_education: education,
					i_year_codeExp: yearCodeExp,
					i_introduction: introduction,
					i_cert_path: cert_path
				})
				.where('id', id);

			const skillInput = JSON.parse(skills).map(skill => {
				return this.knex
					.select('id')
					.from(CODINGSKILLS)
					.where('skill', skill)
					.then(skillId => {
						// console.log('id: ' + skillId[0].id);
						return this.knex(INSTRUCTORS_SKILLS)
							.insert({
								instructor_id: id,
								codingSkill_id: skillId[0].id
							})
							.returning('instructor_id');
					});
			});

			return Promise.all(skillInput).then(id => {
				const instructorInfo = {
					id: id[0][0],
					education,
					yearCodeExp,
					introduction,
					cert_path,
					skills
				};
				return instructorInfo;
			});
		} catch (err) {
			// console.error(err);
			throw err;
		}
	}

	async getProfile(id) {
		const userInfo = await this.knex
			.select()
			.from(USERS)
			.where('id', id);
		console.log('userInfo: ' + userInfo[0].role);

		if (userInfo[0].role === 'instructor') {
			const instructorInfo = await this.knex
				.select('skill')
				.from(CODINGSKILLS)
				.join(INSTRUCTORS_SKILLS, 'codingSkill_id', 'codingSkills.id')
				.where('instructor_id', id);
			// console.log('instructor: ' + instructorInfo);
			return {
				userInfo: userInfo[0],
				instructorInfo: instructorInfo
			};
		} else {
			return userInfo[0];
		}
	}

	uploadProfilePic(id, url) {
		return this.knex(USERS)
			.where('id', id)
			.update('profilePic', url)
			.returning('profilePic');
	}
};
