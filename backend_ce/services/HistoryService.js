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
				const bighistory = history.map(message => {
					return this.knex
						.select()
						.from('questions')
						.where('questions.id', message.question_id)
						.then(question => {
							const all = {
								message,
								question: question[0]
							};
							return all;
						});
				});
				return Promise.all(bighistory).then(all => {
					return all;
				});
			});
	}
};

// module.exports = class HistoryService {
//   constructor(knex) {
//     this.knex = knex;
//   }
//   getHistory(user_id) {
//     console.log(user_id + ' of getHistoryService');
//     return this.knex
//       .select('*')
//       .from('chatrooms')
//       .rightJoin('messages', 'chatrooms.id', 'messages.chatroom_id')
//       .where('student_id', user_id)
//       .orWhere('instructor_id', user_id)
//       .then(history => {
//         return this.knex
//           .select('*')
//           .from('questions')
//           .where('questions.id', history[0].question_id)
//           .then(question => {
//             const historyhaha = [question, history];
//             historyhaha[0].map(his => {
//               return [his, question];
//             });
//           });
//       });
//   }
// };
