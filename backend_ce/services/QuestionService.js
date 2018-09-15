const USERS = require('./tables').USERS;
const QUESTIONS = require('./tables').QUESTIONS;
const CODINGSKILLS = require('./tables').CODINGSKILLS;
const QUESTIONS_SKILLS = require('./tables').QUESTIONS_SKILLS;
const CHATROOOMS = require('./tables').CHATROOOMS;

module.exports = class QuestionService {
	constructor(knex) {
		this.knex = knex;
	}

	checkCredit(id) {
		// Checking student before entering into question form
		return this.knex
			.select()
			.from(USERS)
			.where('id', id)
			.andWhere('role', 'student')
			.then(student => {
				// console.log(student[0].s_questionsCanAsk);
				if (!student[0]) {
					throw new Error('Student not found');
				} else if (student[0].s_questionsCanAsk <= 0) {
					throw new Error('You do not have enough credit to ask a question');
				} else {
					return student[0].s_questionsCanAsk;
				}
			})
			.catch(err => {
				throw err;
			});
	}

	async createQuestion(id, content, image_path, skills) {
		try {
			// Checking student before entering into question form
			const student = await this.knex
				.select()
				.from(USERS)
				.where('id', id)
				.andWhere('role', 'student');

			if (!student[0]) {
				throw new Error('Student not found');
			}
			if (student[0].s_questionsCanAsk <= 0) {
				throw new Error('You do not have enough credit to ask a question');
			}

			await this.knex(USERS)
				.where('id', id)
				.decrement('s_questionsCanAsk', 1);

			const question = await this.knex(QUESTIONS)
				.insert({
					student_id: id,
					content,
					image_path
				})
				.returning('id');

			// console.log('skills ', skills);
			const skillInput = JSON.parse(skills).map(skill => {
				return this.knex
					.select('id')
					.from(CODINGSKILLS)
					.where('skill', skill)
					.then(skillId => {
						// console.log('id: ' + question[0]);
						return this.knex(QUESTIONS_SKILLS)
							.insert({
								question_id: question[0],
								codingSkill_id: skillId[0].id
							})
							.returning('question_id');
					});
			});

			return Promise.all(skillInput)
				.then(questionId => {
					// console.log('question id: ' + questionId[0][0]);
					return this.knex(CHATROOOMS)
						.insert({
							student_id: id,
							question_id: questionId[0][0]
						})
						.returning('id');
				})
				.then(chatId => {
					const questionInfo = {
						questionId: question[0],
						chatId: chatId[0],
						studentId: id,
						content,
						image_path,
						skills
					};
					return questionInfo;
				});
		} catch (err) {
			// console.error(err);
			throw err;
		}
	}

	listQuestion(id) {
		// Checking instructor before listing questions
		return this.knex
			.select()
			.from(USERS)
			.where('id', id)
			.andWhere('role', 'instructor')
			.then(instructor => {
				if (!instructor[0]) {
					throw new Error('Instructor not found');
				} else {
					return this.knex
						.select()
						.from(QUESTIONS)
						.where('active', true);
				}
			})
			.then(questionList => {
				const getQuestionListInfo = questionList.map(question => {
					// console.log('question', question);
					const getQuestionSkills = this.knex
						.select('skill')
						.from(CODINGSKILLS)
						.join(QUESTIONS_SKILLS, 'codingSkill_id', 'codingSkills.id')
						.where('question_id', question.id);

					const getChatId = this.knex
						.select('id')
						.from(CHATROOOMS)
						.where('question_id', question.id);

					return Promise.all([getQuestionSkills, getChatId]).then(
						skillChatInfo => {
							// console.log('skillChatInfo', skillChatInfo);
							const questionListInfo = {
								questionInfo: question,
								skillInfo: skillChatInfo[0],
								chatInfo: skillChatInfo[1][0]
							};
							return questionListInfo;
						}
					);
				});
				return Promise.all(getQuestionListInfo).then(questionListInfo => {
					return questionListInfo;
				});
			})
			.catch(err => {
				throw err;
			});
	}

	createRating(chatId, rating, feedback) {
		return this.knex(CHATROOOMS)
			.update({ s_rating: rating, s_feedback: feedback })
			.where('id', chatId)
			.returning('instructor_id')
			.then(instructorId => {
				return this.knex(USERS)
					.increment('i_total_rating', rating)
					.where('id', instructorId[0])
					.returning('id');
			})
			.then(instructorId => {
				return this.knex(USERS)
					.increment('i_num_rating', 1)
					.where('id', instructorId[0]);
			});
	}
};
