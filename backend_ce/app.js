// General Initialization
require('dotenv').config();
const NODE_ENV = process.env.NODE_ENV || 'development';

const knexFile = require('./knexfile')[NODE_ENV];
const knex = require('knex')(knexFile);

const app = require('./utils/init-app')(knex);

// Dependency Injection for Routers and Service
const {
	UserRouter
} = require('./routers');

const {
	UserService
} = require('./services');

let userService = new UserService(knex);

app.use('/api', new UserRouter(userService).router());

// HTTP Setting
app.listen(8080, () => console.log('Started backend: listening on port 8080!'));