const USERS = require('./tables').USERS;
const PURCHASERECORDS = require('./tables').PURCHASERECORDS;

module.exports = class PaymentService {
	constructor(knex) {
		this.knex = knex;
	}

	addCredit(userId, packageType, amount, paymentId) {
		console.log('addCredit params', userId, packageType, amount, paymentId);
		return this.knex
			.select()
			.from(USERS)
			.where('id', userId)
			.andWhere('role', 'student')
			.then(student => {
				if (!student[0]) {
					throw new Error('Student not found');
				} else {
					return this.knex(PURCHASERECORDS)
						.insert({
							student_id: userId,
							package_type: packageType,
							amount,
							payment_id: paymentId
						})
						.returning('student_id');
				}
			})
			.then(studentId => {
				switch (packageType) {
				case '1 Question':
					return this.knex(USERS)
						.increment('s_questionsCanAsk', 1)
						.where('id', studentId[0])
						.returning('s_questionsCanAsk');
				case '3 Questions':
					return this.knex(USERS)
						.increment('s_questionsCanAsk', 3)
						.where('id', studentId[0])
						.returning('s_questionsCanAsk');
				case '10 Questions':
					return this.knex(USERS)
						.increment('s_questionsCanAsk', 10)
						.where('id', studentId[0])
						.returning('s_questionsCanAsk');
				default:
					throw new Error('Failed to add credit');
				}
			})
			.catch(err => {
				throw err;
			});
	}

	getRecord(studentId) {
		return this.knex(PURCHASERECORDS)
			.where('student_id', studentId)
			.orderBy('created_at', 'desc');
	}
};
