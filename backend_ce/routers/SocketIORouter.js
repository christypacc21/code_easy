class SocketRouter {
	constructor(io, knex, chatroomName) {
		this.io = io;
		this.knex = knex;
		this.chatroomName = chatroomName;
	}

	router() {
		this.io.on('connection', (socket) => {
			// THIS IS THE POINT WHERE...
			console.log('a user has connected to our socket.io server');
			console.log('this is from socket.io', socket.session.passport);

			if (!socket.session.passport) {
				socket.emit('unauthorized');
			} else {
				this.onConnect(socket);

				socket.on('chat message', (msg) => {
					this.onMessageReceived(socket, msg);
				});

				socket.on('I NEED MORE', (count) => {
					this.onLoadMore(socket, count);
				});
			}
		});
	}

	onConnect(socket) {
		this.redisClient.lrange(this.chatroomName, 0, 20, (err, messages) => {
			if (err) {
				console.log(err);
				this.io.emit('chat error', 'SORRY! Something\'s wrong :(');
				return;
			}
			messages.reverse();
			socket.emit('initial messages', messages);
		});
	}

	onMessageReceived(socket, msg, cb) {
		const user = socket.session.passport.user;
		const wholeMessage = user.profile.displayName + ': ' + msg;

		this.redisClient.lpush(this.chatroomName, wholeMessage, (err) => {
			if (err) {
				console.log(err);
				this.io.emit('chat error', 'SORRY! Something\'s wrong :(');
				return;
			}
			this.io.emit('chat message', wholeMessage);
			if (cb != null) {
				cb();
			}
		});
	}

	onLoadMore(socket, count) {
		console.log(-count - 20, -count);
		this.redisClient.lrange(this.chatroomName, count, count + 20, (err, messages) => {
			console.log(messages);
			if (err) {
				console.log(err);
				this.io.emit('chat error', 'SORRY! Something\'s wrong :(');
				return;
			}
			socket.emit('your messages', messages);
		});
	}
}

module.exports = SocketRouter;