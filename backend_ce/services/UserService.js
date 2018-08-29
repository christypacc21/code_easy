const USERS = require('./tables').USERS;

module.exports = class UserService {
	constructor(knex) {
		this.knex = knex;
	}

	localLogin(email) {
		return this.knex.select().from(USERS).where('email', email);
	}

	localSignUp(displayName, email, password, role) {
		return this.knex(USERS).insert({
			display_name: displayName,
			email,
			password,
			role
		}).returning('id');
	}

	checkValidEmail(email) {
		return this.knex.select().from(USERS)
			.where('email', email);
	}

	getUserInfoById(id) {
		return this.knex.select().from(USERS)
			.where('id', id);
	}

	facebookSignUp(displayName, facebookId, email, profilePic, role) {
		return this.knex(USERS).insert({
			display_name: displayName,
			facebook_id: facebookId,
			email,
			profilePic,
			role // role is not nullable
		}).returning('id').catch(function(error) {
			console.error(error);
		});
	}

	findUserByFacebookId(facebookId) {
		return this.knex.select().from(USERS).where({
			facebook_id: facebookId
		});
	}

	instructorSignUp(education, yearCodeExp, introduction, cert_path) {
		return this.knex(USERS).insert({

		}).returning('id');
	}

	// getProfilePic(id){
	//     return this.knex.select('propic_path').from(USERS).where("id",id);
	// }

	// uploadProfilePic(id,url){
	//     return this.knex(USERS).where('id',id).update('propic_path',url);
	// }
};