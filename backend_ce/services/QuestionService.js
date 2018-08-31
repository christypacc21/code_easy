const USERS = require('./tables').USERS;
const QUESTIONS = require('./tables').QUESTIONS;
const CODINGSKILLS = require('./tables').CODINGSKILLS;
const QUESTIONS_SKILLS = require('./tables').QUESTIONS_SKILLS;


module.exports = class QuestionService {
	constructor(knex) {
		this.knex = knex;
	}

	checkCredit(id) {
		// For checking student before entering into question form
		return this.knex.select().from(USERS).where('id', id).andwhere('role', 'student').then(credit => {
			// console.log(credit[0].s_questionsCanAsk);
			if (!credit) {
				throw new Error('Student not found');
			} else if (credit[0].s_questionsCanAsk <= 0) {
				throw new Error('You do not have enough credit to ask a question');
			} else {
				return credit[0].s_questionsCanAsk;
			}
		}).catch(err => {
			throw err;
		});
	}

	async createQuestion(id, content, image_path, skills) {
		try {
			// Checking
			const student = await this.knex.select().from(USERS).where('id', id).andWhere('role', 'student');

			if (!student) {
				throw new Error('Student not found');
			}
			if (student[0].s_questionsCanAsk <= 0) {
				throw new Error('You do not have enough credit to ask a question');
			}

			await this.knex(USERS).where('id', id).decrement('s_questionsCanAsk', 1);

			const question = await this.knex(QUESTIONS).insert({
				student_id: id,
				content,
				image_path
			}).returning('id');

			const skillInput = skills.map(skill => {
				return this.knex.select('id').from(CODINGSKILLS).where('skill', skill).then(skillId => {
					// console.log('id: ' + question[0]);
					return this.knex(QUESTIONS_SKILLS).insert({
						question_id: question[0],
						codingSkill_id: skillId[0].id
					}).returning('question_id');
				});
			});

			return Promise.all(skillInput).then((questionId) => {
				// console.log('question id: ' + questionId[0][0]);
				return questionId[0][0];
			});
		} catch (err) {
			// console.error(err);
			throw err;
		}
	}
};