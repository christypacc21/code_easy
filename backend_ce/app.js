// General Initialization
require('dotenv').config();
const NODE_ENV = process.env.NODE_ENV || 'development';

const knexFile = require('./knexfile')[NODE_ENV];
const knex = require('knex')(knexFile);

const app = require('./utils/init-app')(knex);

// Dependency Injection for Routers and Service
const {
	UserRouter,
	ForumRouter,
	QuestionRouter
} = require('./routers');

const {
	UserService,
	ForumService,
	QuestionService
} = require('./services');

let userService = new UserService(knex);
let forumService = new ForumService(knex);
let questionService = new QuestionService(knex);

app.use('/api', new UserRouter(userService).router());
app.use('/api/forum', new ForumRouter(forumService).router());
app.use('/api/question', new QuestionRouter(questionService).router());

// HTTP Setting
app.listen(8080, () => console.log('Started backend: listening on port 8080!'));