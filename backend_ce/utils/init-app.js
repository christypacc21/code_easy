const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

module.exports = (auth) => {
	const app = express();

	app.use(logger('dev'));
	app.use(cors());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(fileUpload());
	app.use(auth.initialize());

	return app;
};