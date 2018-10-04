const USERS = require('./tables').USERS;
const CODINGSKILLS = require('./tables').CODINGSKILLS;
const INSTRUCTORS_SKILLS = require('./tables').INSTRUCTORS_SKILLS;

module.exports = class UserService {
	constructor(knex) {
		this.knex = knex;
	}

	async instructorSignUp(
		education,
		yearCodeExp,
		introduction,
		cert_path,
		skills,
		id
	) {
		try {
			await this.knex(USERS)
				.update({
					i_education: education,
					i_year_codeExp: yearCodeExp,
					i_introduction: introduction,
					i_cert_path: cert_path
				})
				.where('id', id);

			const skillInput = JSON.parse(skills).map(skill => {
				return this.knex
					.select('id')
					.from(CODINGSKILLS)
					.where('skill', skill)
					.then(skillId => {
						// console.log('id: ' + skillId[0].id);
						return this.knex(INSTRUCTORS_SKILLS)
							.insert({
								instructor_id: id,
								codingSkill_id: skillId[0].id
							})
							.returning('instructor_id');
					});
			});

			return Promise.all(skillInput).then(id => {
				const instructorInfo = {
					id: id[0][0],
					education,
					yearCodeExp,
					introduction,
					cert_path,
					skills
				};
				return instructorInfo;
			});
		} catch (err) {
			// console.error(err);
			throw err;
		}
	}

	async getProfile(id) {
		const userInfo = await this.knex
			.select()
			.from(USERS)
			.where('id', id);
		console.log('getProfile - userInfo: ' + userInfo[0].role);

		if (userInfo[0].role === 'instructor') {
			const instructorInfo = await this.knex
				.select('skill')
				.from(CODINGSKILLS)
				.join(INSTRUCTORS_SKILLS, 'codingSkill_id', 'codingSkills.id')
				.where('instructor_id', id);
			console.log('instructor: ' + instructorInfo);
			return {
				id: userInfo[0].id,
				displayName: userInfo[0].display_name,
				email: userInfo[0].email,
				profilePic: userInfo[0].profilePic,
				role: userInfo[0].role,
				sQuestionCredit: userInfo[0].s_questionsCanAsk,
				iBalance: userInfo[0].i_balance,
				iEducation: userInfo[0].i_education,
				iYearOfCodeExp: userInfo[0].i_year_codeExp,
				iIntroduction: userInfo[0].i_introduction,
				iNumRating: userInfo[0].i_num_rating,
				iTotalRating: userInfo[0].i_total_rating,
				instructorInfo: instructorInfo
			};
		} else {
			return {
				id: userInfo[0].id,
				displayName: userInfo[0].display_name,
				email: userInfo[0].email,
				profilePic: userInfo[0].profilePic,
				role: userInfo[0].role,
				sQuestionCredit: userInfo[0].s_questionsCanAsk,
				iBalance: userInfo[0].i_balance,
				iEducation: userInfo[0].i_education,
				iYearOfCodeExp: userInfo[0].i_year_codeExp,
				iIntroduction: userInfo[0].i_introduction,
				iNumRating: userInfo[0].i_num_rating,
				iTotalRating: userInfo[0].i_total_rating
			};
		}
	}

	// uploadProfilePic(id, url) {
	// 	return this.knex(USERS)
	// 		.where('id', id)
	// 		.update('profilePic', url)
	// 		.returning('profilePic');
	// }

	// getChatInstructorInfo() {
	//   return (
	//     this.knex
	//       .select('*')
	//       .from('users')
	//       // .where('users.role', 'instructor')
	//       .where('users.id', 'chatrooms.instructor_id') //'chatrooms.instructor_id' shd be passed from router by param above
	//       .rightJoin(
	//         'instructors_skills',
	//         'instructors_skills_instructor_id',
	//         'users.id'
	//       )
	//       .join(
	//         'codingSkills',
	//         'codingSkills.id',
	//         'instructors_skills.codingSkill_id'
	//       )
	//   );
	// }
};
