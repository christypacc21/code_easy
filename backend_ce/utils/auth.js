const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;
require('dotenv').config();

module.exports = (knex) => {
	const strategy = new passportJWT.Strategy({
		secretOrKey: process.env.JWT_SECRET,
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
			return passport.authenticate('jwt', process.env.JWT_SESSION);
		}
	};
};