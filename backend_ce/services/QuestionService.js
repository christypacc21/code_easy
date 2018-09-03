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
		// For checking student before entering into question form
		return this.knex
			.select()
			.from(USERS)
			.where('id', id)
			.andWhere('role', 'student')
			.then(student => {
				// console.log(student[0].s_questionsCanAsk);
				if (!student) {
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
			// Checking
			const student = await this.knex
				.select()
				.from(USERS)
				.where('id', id)
				.andWhere('role', 'student');

			if (!student) {
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

			console.log('skills ', skills);
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
		// For checking instructor before listing questions
		return this.knex
			.select()
			.from(USERS)
			.where('id', id)
			.andWhere('role', 'instructor')
			.then(instructor => {
				if (!instructor) {
					throw new Error('Instructor not found');
				} else {
					return this.knex
						.select()
						.from(QUESTIONS)
						.where('active', true)
						.then(questionList => {
							const getQuestionListInfo = questionList.map(question => {
								// console.log('question', question);
								return this.knex
									.select('id')
									.from(CHATROOOMS)
									.where('question_id', question.id)
									.then(chatId => {
										// console.log('chatId', chatId[0].id);

										// use chatId[0] to avoid error: "Cannot read property 'id' of undefined"
										const questionListInfo = {
											chatId: chatId[0],
											questionInfo: question
										};
										// console.log('questionListInfo', questionListInfo);
										return questionListInfo;
									});
							});
							return Promise.all(getQuestionListInfo).then(questionListInfo => {
								return questionListInfo;
							});
						});
				}
			})
			.catch(err => {
				throw err;
			});
	}
};
