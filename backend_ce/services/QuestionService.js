const USERS = require('./tables').USERS;
// const QUESTIONS = require('./tables').QUESTIONS;
// const QUESTIONS_SKILLS = require('./tables').QUESTIONS;


module.exports = class QuestionService {
	constructor(knex) {
		this.knex = knex;
	}

	checkCredit(id) {
		return this.knex.select('s_questionsCanAsk').from(USERS).where('id', id).then(credit => {
			// console.log(credit[0].s_questionsCanAsk);
			if (credit[0].s_questionsCanAsk < 1) {
				throw new Error('You do not have enough credit to ask a question');
			} else {
				return credit[0].s_questionsCanAsk;
			}
		}).catch(err => {
			throw err;
		});
	}

	// createQuestion(id, content, image_path, skills) {
	// 	try {

	// 		this.knex(USERS).where('id', id).decrement('s_questionsCanAsk', 1);

	// 		this.knex(QUESTIONS).insert({
	// 			student_id: id,
	// 			content,
	// 			image_path
	// 		});

	// 		const skillInput = skills.map(skill => {
	// 			return this.knex.select('id').from(CODINGSKILLS).where('skill', skill).then(skillId => {
	// 				// console.log('id: ' + skillId[0].id);
	// 				return this.knex(INSTRUCTORS_SKILLS).insert({
	// 					instructor_id: id,
	// 					codingSkill_id: skillId[0].id
	// 				}).returning('instructor_id');
	// 			});
	// 		});

	// 		return Promise.all(skillInput).then((id) => {
	// 			return 'Profile done for instructor id: ' + id;
	// 		});
	// 	} catch (err) {
	// 		console.error(err);
	// 		throw err;
	// 	}
	// }

	getProfilePic(id) {
		return this.knex.select('profilePic').from(USERS).where('id', id);
	}

	uploadProfilePic(id, url) {
		return this.knex(USERS).where('id', id).update('profilePic', url);
	}
};