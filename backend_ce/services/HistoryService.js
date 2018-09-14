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
        .rightJoin(
          'questions_skills',
          'questions_skills.question_id',
          'questions.id'
        )
        .leftJoin(
          'codingSkills',
          'questions_skills.codingSkill_id',
          'codingSkills.id'
        )
        // .join('users', 'chatrooms.student_id', 'users.id')
        // .join('users', 'chatrooms.instructor_id', 'users.id')
        .then(all => {
          return all;
        })
    );
  }
};
