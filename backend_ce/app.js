// General Initialization
require('dotenv').config();
const NODE_ENV = process.env.NODE_ENV || 'development';
const knexFile = require('./knexfile')[NODE_ENV];
const knex = require('knex')(knexFile);
const socketIO = require('socket.io');
const app = require('./utils/init-app')(knex);

// Dependency Injection for Routers and Service
const {
  UserRouter,
  ForumRouter,
  QuestionRouter,
  SocketIORouter
} = require('./routers');

const { UserService, ForumService, QuestionService } = require('./services');

let userService = new UserService(knex);
let forumService = new ForumService(knex);
let questionService = new QuestionService(knex);

// new SocketIORouter(io).router();
app.use('/api', new UserRouter(userService).router());
app.use('/api/forum', new ForumRouter(forumService).router());
app.use('/api/question', new QuestionRouter(questionService).router());

// HTTP Setting

const server = app.listen(8080, () => {
  console.log('Server is running at port 8080');
});

// const io = socketIO(server);

// io.on('connection', socket => {
//   console.log('client connected');
//   socket.emit('Hello', { msg: 'Hello' });
// });
