// const MESSAGES = require('./tables').MESSAGES;

module.exports = class HistoryService {
  constructor(knex) {
    this.knex = knex;
  }
  getHistory(user_id) {
    console.log(user_id + ' of getHistoryService');
    return (
      this.knex
        .select(
          '*',
          'questions.id as question_id',
          'chatrooms.id as chatroom_id',
          'questions.created_at as questionDateTime',
          'chatrooms.created_at as chatroomStartTime',
          'questions.active as question_active',
          'chatrooms.active as chatroom_active'
        )
        .from('chatrooms')
        .leftJoin('questions', 'chatrooms.question_id', 'questions.id')
        // .where('chatrooms.active', false) // to check whether the chat is ended(active=false)(gone to history) or not
        .where('chatrooms.student_id', user_id)
        .orWhere('chatrooms.instructor_id', user_id)
        .then(questionList => {
          console.log('questionList', questionList);
          const getQuestionListInfo = questionList.map(question => {
            console.log('question', question);
            return this.knex
              .select('skill')
              .from('codingSkills')
              .join('questions_skills', 'codingSkill_id', 'codingSkills.id')
              .where('questions_skills.question_id', question.question_id)
              .then(skills => {
                console.log('skills', skills);
                const data = {
                  question: question,
                  skills
                };
                console.log('data', data);
                return data;
              });
          });
          return Promise.all(getQuestionListInfo).then(all => {
            console.log('all', all);
            return all;
          });
        })
    );
  }

  // getChatroomActive(chatId) {
  //   return this.knex
  //     .select('chatrooms.active')
  //     .from('chatrooms')
  //     .where('chatrooms.id', chatId);
  // }
};

// getHistory(user_id) {
// 	console.log(user_id + ' of getHistoryService');
// 	return (
// 		this.knex
// 			.select(
// 				'*',
// 				'questions.id as question_id',
// 				'chatrooms.id as chatroom_id',
// 				'questions.created_at as questionDateTime',
// 				'chatrooms.created_at as chatroomStartTime',
// 				'questions.active as question_active',
// 				'chatrooms.active as chatroom_active'
// 			)
// 			.from('chatrooms')
// 			.leftJoin('questions', 'chatrooms.question_id', 'questions.id')
// 			// .where('chatrooms.active', false) // to check whether the chat is ended(active=false)(gone to history) or not
// 			.where('chatrooms.student_id', user_id)
// 			.orWhere('chatrooms.instructor_id', user_id)
// 			.rightJoin(
// 				'questions_skills',
// 				'questions_skills.question_id',
// 				'questions.id'
// 			)
// 			.leftJoin(
// 				'codingSkills',
// 				'questions_skills.codingSkill_id',
// 				'codingSkills.id'
// 			)
// 			// .join('users', 'chatrooms.student_id', 'users.id')
// 			// .join('users', 'chatrooms.instructor_id', 'users.id')
// 			.then(all => {
// 				return all;
// 			})
// 	);
// }
