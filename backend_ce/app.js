// General Initialization
require('dotenv').config();
const NODE_ENV = process.env.NODE_ENV || 'development';

const knexFile = require('./knexfile')[NODE_ENV];
const knex = require('knex')(knexFile);

const jwt = require('jwt-simple');
const config = require('./utils/config');

// // Dependency Injection for Routers and Service
// const ViewRouter = require('./ViewRouter');

// const {
//     HomeRouter,
//     ProfileRouter,
//     HistoryRouter
// } = require('./routers');

// const {
//     HomeService,
//     ProfileService,
//     HistoryService
// } = require('./services');

// let homeService = new HomeService(knex);
// let profileService = new ProfileService(knex);
// let historyService = new HistoryService(knex);

const app = require('./utils/init-app')(knex);

// app.use('/', new ViewRouter().router());

// // app.use('/api/home/submit', isLoggedIn, (req) => console.log('req.body', req.body));

// app.use('/api/home', isLoggedIn, new HomeRouter(homeService).router());
// app.use('/api/profile', isLoggedIn, new ProfileRouter(profileService).router());
// app.use('/api/history', isLoggedIn, new HistoryRouter(historyService).router());

// User Login
app.post('/api/login', async(req, res) => {
	if (req.body.email && req.body.password) {
		const email = req.body.email;
		const password = req.body.password;
		const user = await knex('users').where('email', email).andWhere('password', password);

		if (user) {
			const payload = {
				id: user.id
			};
			const token = jwt.encode(payload, config.jwtSecret);
			res.json({
				token: token
			});
		} else {
			res.sendStatus(401);
		}
	} else {
		res.sendStatus(401);
	}
});

// HTTP Setting
app.listen(8080, () => console.log('Started backend: listening on port 8080!'));