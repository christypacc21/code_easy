const passport = require('passport');
const passportJWT = require('passport-jwt');
const config = require('./config');
const ExtractJwt = passportJWT.ExtractJwt;

module.exports = (knex) => {
	const strategy = new passportJWT.Strategy({
		secretOrKey: config.jwtSecret,
		jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
	}, async(payload, done) => {
		const user = await knex('users').where('id', payload.id);

		if (user) {
			return done(null, {
				id: user.id
			});
		} else {
			return done(new Error('User not found'), null);
		}
	});
	passport.use(strategy);

	return {
		initialize: function() {
			return passport.initialize();
		},
		authenticate: function() {
			return passport.authenticate('jwt', config.jwtSession);
		}
	};
};