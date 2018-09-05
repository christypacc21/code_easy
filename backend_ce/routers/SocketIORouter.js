const CHATROOOMS = require('../services/tables').CHATROOOMS;
const MESSAGES = require('../services/tables').MESSAGES;
const QUESTIONS = require('../services/tables').QUESTIONS;

let allMessages = [];

module.exports = class SocketRouter {
	constructor(io, knex) {
		this.io = io;
		this.knex = knex;
	}

	router() {
		this.io.on('connection', socket => {
			// THIS IS THE POINT WHERE...
			console.log(
				'a user has connected to our socket.io server'
				// , socket
			);

			// this.onConnect(socket);

			// socket.on('chat message', msg => {
			// 	this.onMessageReceived(socket, msg);
			// });

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
					this.onConnect(payload);
				}

				if (payload.actionType === 'SEND_MESSAGE') {
					allMessages = [...allMessages, payload];
					console.log('socket-allMessages: ', allMessages);

					this.onMessageReceived(payload);

					this.io.emit('SOCKET_ON', {
						actionType: 'NEW_MESSAGE',
						payload
					});
				}

				if (payload.actionType === 'GET_ALL_MESSAGES') {
					console.log('messages: ', allMessages);
					socket.emit('SOCKET_ON', {
						actionType: 'GET_ALL_MESSAGES',
						payload: allMessages
					});
				}
			});
		});
	}

	onConnect(user) {
		if (user.role === 'instructor') {
			this.knex(CHATROOOMS)
				.update('instructor_id', user.userId)
				.where('id', user.chatId)
				.catch(err => {
					console.log(err);
					this.io.emit('SOCKET_ON', {
						actionType: 'CHAT_ERROR',
						payload: err
					});
					return;
				});
		}
	}

	onMessageReceived(msg) {
		// const wholeMessage = user.profile.displayName + ': ' + msg;

		this.knex(MESSAGES).insert({
			chatroom_id: msg.chatId,
			text: msg.message,
			type: 'text'
		});

		// // lpush(this.chatroomName, wholeMessage, err => {
		// // 	if (err) {
		// // 		console.log(err);
		// // 		this.io.emit('chat error', 'SORRY! Something\'s wrong :(');
		// // 		return;
		// // 	}
		// 	this.io.emit('chat message', wholeMessage);
		// 	if (cb != null) {
		// 		cb();
		// 	}
	}
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
