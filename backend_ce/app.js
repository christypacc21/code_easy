// General Initialization
require('dotenv').config();
const NODE_ENV = process.env.NODE_ENV || 'development';
const knexFile = require('./knexfile')[NODE_ENV];
const knex = require('knex')(knexFile);
const socketIO = require('socket.io');
const authClass = require('./utils/auth');
const auth = authClass(knex);
const app = require('./utils/init-app')(auth);

// Dependency Injection for Routers and Service
const {
	AuthRouter,
	UserRouter,
	ForumRouter,
	QuestionRouter,
	PaymentRouter,
	SocketIORouter,
	HistoryRouter
} = require('./routers');

const {
	AuthService,
	UserService,
	ForumService,
	QuestionService,
	PaymentService,
	HistoryService
} = require('./services');

let authService = new AuthService(knex);
let userService = new UserService(knex);
let forumService = new ForumService(knex);
let questionService = new QuestionService(knex);
let paymentService = new PaymentService(knex);
let historyService = new HistoryService(knex);

// app.use('/api/forum', new ForumRouter(forumService).router());
app.use('/api/auth', new AuthRouter(authService).router());
app.use('/api/user', auth.authenticate(), new UserRouter(userService).router());
app.use(
	'/api/forum',
	auth.authenticate(),
	new ForumRouter(forumService).router()
);
app.use(
	'/api/question',
	auth.authenticate(),
	new QuestionRouter(questionService).router()
);
app.use(
	'/api/payment',
	auth.authenticate(),
	new PaymentRouter(paymentService).router()
);
app.use(
	'/api/history',
	auth.authenticate(),
	new HistoryRouter(historyService).router()
);

// HTTP Setting
const server = app.listen(8080, () => {
	console.log('Server is running at port 8080');
});

// SocketIO Setting
const io = socketIO(server);
new SocketIORouter(io, knex).router();
