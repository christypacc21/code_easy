const USERS = require('./tables').USERS;
const CODINGSKILLS = require('./tables').CODINGSKILLS;
const INSTRUCTORS_SKILLS = require('./tables').INSTRUCTORS_SKILLS;

module.exports = class UserService {
	constructor(knex) {
		this.knex = knex;
	}

	instructorSignUp(education, yearCodeExp, introduction, cert_path, skills, id) {
		try {
			this.knex(USERS).update({
				i_education: education,
				i_year_codeExp: yearCodeExp,
				i_introduction: introduction,
				i_cert_path: cert_path,
			}).where('id', id);

			const skillInput = skills.map(skill => {
				return this.knex.select('id').from(CODINGSKILLS).where('skill', skill).then(skillId => {
					// console.log('id: ' + skillId[0].id);
					return this.knex(INSTRUCTORS_SKILLS).insert({
						instructor_id: id,
						codingSkill_id: skillId[0].id
					}).returning('instructor_id');
				});
			});

			return Promise.all(skillInput).then((id) => {
				return 'Profile done for instructor id: ' + id[0][0];
			});
		} catch (err) {
			// console.error(err);
			throw err;
		}
	}

	getProfilePic(id) {
		return this.knex.select('profilePic').from(USERS).where('id', id);
	}

	uploadProfilePic(id, url) {
		return this.knex(USERS).where('id', id).update('profilePic', url);
	}
};