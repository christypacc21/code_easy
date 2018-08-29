const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const authClass = require('./auth');

module.exports = (knex) => {
	const app = express();
	const auth = authClass(knex);

	app.use(cors());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(auth.initialize());
	app.use(fileUpload());

	return app;
};