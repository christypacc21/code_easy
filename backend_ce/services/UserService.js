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
			role: role
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

	facebookSignUp(displayName, facebookId, profilePic, role) {
		return this.knex(USERS).insert({
			display_name: displayName,
			facebook_id: facebookId,
			propic_path: profilePic,
			role: role
		}).returning('id');
	}

	findUserByFacebookId(facebookId) {
		return this.knex.select().from(USERS).where({
			facebook_id: facebookId
		});
	}

	// getProfilePic(id){
	//     return this.knex.select('propic_path').from(USERS).where("id",id);
	// }

	// uploadProfilePic(id,url){
	//     return this.knex(USERS).where('id',id).update('propic_path',url);
	// }
};