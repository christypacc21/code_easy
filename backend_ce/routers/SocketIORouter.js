const CHATROOOMS = require('../services/tables').CHATROOOMS;
const MESSAGES = require('../services/tables').MESSAGES;
const QUESTIONS = require('../services/tables').QUESTIONS;
const USERS = require('../services/tables').USERS;

module.exports = class SocketRouter {
	constructor(io, knex) {
		this.io = io;
		this.knex = knex;
	}

	router() {
		this.io.on('connection', socket => {
			// THIS IS THE POINT WHERE...
			console.log('a user has connected to our socket.io server');

			// socket.on('I NEED MORE', count => {
			// 	this.onLoadMore(socket, count);
			// });

			socket.on('SOCKET_EMIT', payload => {
				console.log('socket emit event: ', payload);

				if (payload.actionType === 'START_SESSION') {
					console.log(
						`a ${payload.role} with id ${
							payload.userId
						} has connected to chatroom ${payload.chatId}`
					);
					if (payload.role === 'instructor') {
						this.onInstructorConnect(socket, payload).then(studentInfo => {
							console.log('studentInfo - for instructor', studentInfo);
							this.io.emit('SOCKET_ON', {
								actionType: 'GET_STUDENT_INFO',
								payload: studentInfo
							});
						});
					} else {
						this.getInstructorInfo(socket, payload).then(instructorInfo => {
							console.log('instructorInfo - for student', instructorInfo);
							this.io.emit('SOCKET_ON', {
								actionType: 'GET_INSTRUCTOR_INFO',
								payload: instructorInfo
							});
						});
					}
				}

				if (payload.actionType === 'SEND_MESSAGE') {
					// allMessages = [...allMessages, payload];
					// console.log('socket-allMessages: ', allMessages);
					this.onMessageReceived(socket, payload);
					this.io.emit('SOCKET_ON', {
						actionType: 'NEW_MESSAGE',
						payload
					});
					this.getInstructorInfo(socket, payload).then(instructorInfo => {
						console.log('instructorInfo - for student', instructorInfo);
						this.io.emit('SOCKET_ON', {
							actionType: 'GET_INSTRUCTOR_INFO',
							payload: instructorInfo
						});
					});
				}

				if (payload.actionType === 'GET_ALL_MESSAGES') {
					// console.log('messages: ', allMessages);
					this.getAllMessage(socket, payload);
				}

				if (payload.actionType === 'END_SESSION') {
					console.log(
						`a ${payload.role} with id ${payload.userId} has ended chatroom ${
							payload.chatId
						}`
					);
					this.onDisconnect(socket, payload).then(() => {
						const res = { success: true, active: false };
						// probably need to emit to a specific chatroom, will try it after deploy
						this.io.emit('SOCKET_ON', {
							actionType: 'UPDATE_END_SESSION',
							payload: res
						});
						return;
					});
				}
			});
		});
	}

	onInstructorConnect(socket, instructor) {
		//should check whether there is already an instructor in the chatroom

		return this.knex(CHATROOOMS)
			.update('instructor_id', instructor.userId)
			.where('id', instructor.chatId)
			.returning('question_id')
			.then(questionId => {
				console.log('chat - questionId', questionId[0]);
				return this.knex(QUESTIONS)
					.update('active', false)
					.where('id', questionId[0])
					.returning('student_id');
			})
			.then(studentId => {
				return this.knex
					.select('id', 'display_name', 'profilePic', 'role')
					.from(USERS)
					.where('users.id', studentId[0]);
			})
			.catch(err => {
				console.log(err);
				socket.emit('SOCKET_ON', {
					actionType: 'CHAT_ERROR',
					payload: err
				});
				return;
			});
	}

	getInstructorInfo(socket, user) {
		return this.knex(CHATROOOMS)
			.select('instructor_id')
			.where('id', user.chatId)
			.then(instructorId => {
				console.log('chat - instructorId', instructorId[0].instructor_id);
				if (instructorId[0].instructor_id) {
					return this.knex
						.select(
							'*',
							'users.id as userId',
							'instructors_skills.id as instructorSkillId',
							'codingSkills.id as codingSkillId'
						)
						.from(USERS)
						.where('users.id', instructorId[0].instructor_id)
						.join(
							'instructors_skills',
							'users.id',
							'instructors_skills.instructor_id'
						)
						.join(
							'codingSkills',
							'instructors_skills.codingSkill_id',
							'codingSkills.id'
						)
						.then(instructorInfoList => {
							console.log('chat - instructorInfoList', instructorInfoList);
							const skillInfoList = instructorInfoList.map(instructorInfo => {
								return instructorInfo.skill;
							});
							return {
								instructorId: instructorInfoList[0].userId,
								displayName: instructorInfoList[0].display_name,
								profilePic: instructorInfoList[0].profilePic,
								role: instructorInfoList[0].role,
								iEducation: instructorInfoList[0].i_education,
								iYearOfCodeExp: instructorInfoList[0].i_year_codeExp,
								iIntroduction: instructorInfoList[0].i_introduction,
								iNumRating: instructorInfoList[0].i_num_rating,
								iTotalRating: instructorInfoList[0].i_total_rating,
								skillInfo: skillInfoList
							};
						});
				} else {
					return null;
				}
			})
			.catch(err => {
				console.log(err);
				socket.emit('SOCKET_ON', {
					actionType: 'CHAT_ERROR',
					payload: err
				});
				return;
			});
	}

	onMessageReceived(socket, msg) {
		return this.knex(MESSAGES)
			.insert({
				chatroom_id: msg.chatId,
				sender_id: msg.userId,
				text: msg.message,
				type: 'text'
			})
			.catch(err => {
				console.log(err);
				socket.emit('SOCKET_ON', {
					actionType: 'CHAT_ERROR',
					payload: err
				});
				return;
			});
	}

	async getAllMessage(socket, msg) {
		try {
			const allMessages = await this.knex
				.select()
				.from(MESSAGES)
				.where('chatroom_id', msg.chatId);

			const messageListInfo = allMessages.map(message => {
				// console.log('message', message);
				return this.knex
					.select('display_name', 'role')
					.from(USERS)
					.where('id', message.sender_id)
					.then(displayName => {
						// console.log('displayName', displayName[0].display_name);
						const messageInfo = {
							chatId: message.chatroom_id,
							userId: message.sender_id,
							displayName: displayName[0].display_name,
							role: displayName[0].role,
							message: message.text,
							type: message.type
						};
						// console.log('messageInfo', messageInfo);
						return messageInfo;
					});
			});
			return Promise.all(messageListInfo).then(messageListInfo => {
				console.log('messageListInfo', messageListInfo);
				socket.emit('SOCKET_ON', {
					actionType: 'GET_ALL_MESSAGES',
					payload: messageListInfo
				});
				return;
			});
		} catch (err) {
			console.error(err);
			socket.emit('SOCKET_ON', {
				actionType: 'CHAT_ERROR',
				payload: err
			});
			return;
		}
	}

	onDisconnect(socket, user) {
		// will update instructor's balance after the student pressed end session
		// only student press will trigger that action? Can have more logics/checkings here
		return this.knex(CHATROOOMS)
			.update('active', false)
			.where('id', user.chatId)
			.returning('instructor_id')
			.then(instructorId => {
				// instructor will earn a fixed amount of $60 after each session now
				// maybe use transaction to prevent duplicant actions?
				return this.knex(USERS)
					.increment('i_balance', 6000)
					.where('id', instructorId[0]);
			})
			.catch(err => {
				console.log(err);
				socket.emit('SOCKET_ON', {
					actionType: 'CHAT_ERROR',
					payload: err
				});
				return;
			});
	}
};

// getAllMessage1(socket, msg) {
// 	return this.knex
// 		.select()
// 		.from(MESSAGES)
// 		.where('chatroom_id', msg.chatId)
// 		.then(allMessages => {
// 			const messageListInfo = allMessages.map(message => {
// 				// console.log('message', message);
// 				return this.knex
// 					.select('display_name')
// 					.from(USERS)
// 					.where('id', message.sender_id)
// 					.then(displayName => {
// 						// console.log('displayName', displayName[0].display_name);
// 						const messageInfo = {
// 							chatId: message.chatroom_id,
// 							userId: message.sender_id,
// 							displayName: displayName[0].display_name,
// 							message: message.text,
// 							type: message.type
// 						};
// 						// console.log('messageInfo', messageInfo);
// 						return messageInfo;
// 					});
// 			});
// 			console.log('messageListInfo', messageListInfo);
// 			return messageListInfo;
// 		})
// 		.catch(err => {
// 			// console.log(err);
// 			socket.emit('SOCKET_ON', {
// 				actionType: 'CHAT_ERROR',
// 				payload: err
// 			});
// 			return;
// 		});
// }

// onLoadMore(socket, count) {
// 	console.log(-count - 20, -count);
// 	this.redisClient.lrange(
// 		this.chatroomName,
// 		count,
// 		count + 20,
// 		(err, messages) => {
// 			console.log(messages);
// 			if (err) {
// 				console.log(err);
// 				this.io.emit('chat error', 'SORRY! Something\'s wrong :(');
// 				return;
// 			}
// 			socket.emit('your messages', messages);
// 		}
// 	);
// }
