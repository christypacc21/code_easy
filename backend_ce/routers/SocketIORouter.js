const CHATROOOMS = require('../services/tables').CHATROOOMS;
const MESSAGES = require('../services/tables').MESSAGES;
const QUESTIONS = require('../services/tables').QUESTIONS;
const USERS = require('../services/tables').USERS;

// let allMessages = [];

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
					this.onConnect(socket, payload);
				}

				if (payload.actionType === 'SEND_MESSAGE') {
					// allMessages = [...allMessages, payload];
					// console.log('socket-allMessages: ', allMessages);

					this.onMessageReceived(socket, payload);

					this.io.emit('SOCKET_ON', {
						actionType: 'NEW_MESSAGE',
						payload
					});
				}

				if (payload.actionType === 'GET_ALL_MESSAGES') {
					// console.log('messages: ', allMessages);
					this.getAllMessage(socket, payload);
				}
			});
		});
	}

	onConnect(socket, user) {
		if (user.role === 'instructor') {
			return this.knex(CHATROOOMS)
				.update('instructor_id', user.userId)
				.where('id', user.chatId)
				.returning('question_id')
				.then(questionId => {
					console.log('chat - questionId', questionId[0]);
					return this.knex(QUESTIONS)
						.update('active', false)
						.where('id', questionId[0]);
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
					.select('display_name')
					.from(USERS)
					.where('id', message.sender_id)
					.then(displayName => {
						// console.log('displayName', displayName[0].display_name);
						const messageInfo = {
							chatId: message.chatroom_id,
							userId: message.sender_id,
							displayName: displayName[0].display_name,
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
};

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
