let allMessages = [];

class SocketRouter {
	constructor(io, knex) {
		this.io = io;
		this.knex = knex;
	}

	router() {
		this.io.on('connection', socket => {
			// THIS IS THE POINT WHERE...
			console.log(
				`a user with id ${socket.id} has connected to our socket.io server`
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
				console.log(
					`a user with id ${payload.userId} has connected to chatroom ${
						payload.chatId
					}`
				);

				if (payload.actionType === 'SEND_MESSAGE') {
					allMessages = [...allMessages, payload];
					console.log('socket-allMessages: ', allMessages);

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

	// onConnect(socket) {
	// 	this.redisClient.lrange(this.chatroomName, 0, 20, (err, messages) => {
	// 		if (err) {
	// 			console.log(err);
	// 			this.io.emit('chat error', 'SORRY! Something\'s wrong :(');
	// 			return;
	// 		}
	// 		messages.reverse();
	// 		socket.emit('initial messages', messages);
	// 	});
	// }

	// onMessageReceived(socket, msg, cb) {
	// 	const user = socket.session.passport.user;
	// 	const wholeMessage = user.profile.displayName + ': ' + msg;
	// 	this.redisClient.lpush(this.chatroomName, wholeMessage, err => {
	// 		if (err) {
	// 			console.log(err);
	// 			this.io.emit('chat error', 'SORRY! Something\'s wrong :(');
	// 			return;
	// 		}
	// 		this.io.emit('chat message', wholeMessage);
	// 		if (cb != null) {
	// 			cb();
	// 		}
	// 	});
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
}

module.exports = SocketRouter;
