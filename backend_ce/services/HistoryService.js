// const MESSAGES = require('./tables').MESSAGES;

module.exports = class HistoryService {
  constructor(knex) {
    this.knex = knex;
  }
  getHistory(user_id) {
    console.log(user_id + ' of getHistoryService');
    return this.knex
      .select('*')
      .from('chatrooms')
      .rightJoin('messages', 'chatrooms.id', 'messages.chatroom_id')
      .where('student_id', user_id)
      .orWhere('instructor_id', user_id)
      .then(history => {
        console.log(history);
        return history;
      });
  }
};