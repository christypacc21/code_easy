exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', (table) => {
		table.increments();
		table.string('display_name').notNullable().unique();
		table.string('email').unique();
		table.string('password');
		table.integer('phone');
		table.string('facebook_id').unique();
		table.string('profilePic');
		table.string('role').notNullable();
		table.integer('s_questionsCanAsk').defaultTo(0);
		table.integer('i_balance').defaultTo(0);
		table.string('i_education');
		table.integer('i_year_codeExp');
		table.string('i_introduction');
		table.string('i_cert_path');
		table.integer('i_num_rating').defaultTo(0);
		table.integer('i_total_rating').defaultTo(0);
		table.boolean('i_approved').defaultTo(true);
		table.timestamps(false, true);
	})

		.then(() => {
			return knex.schema.createTable('favInstructors', (table) => {
				table.increments();
				table.integer('student_id').unsigned();
				table.foreign('student_id').references('users.id');
				table.integer('instructor_id').unsigned();
				table.foreign('instructor_id').references('users.id');
				table.timestamps(false, true);
			});
		})


		.then(() => {
			return knex.schema.createTable('forumPosts', (table) => {
				table.increments();
				table.integer('user_id').unsigned();
				table.foreign('user_id').references('users.id');
				table.string('title');
				table.string('content');
				table.string('image_path');
				table.timestamps(false, true);
			});
		})

		.then(() => {
			return knex.schema.createTable('forumComments', (table) => {
				table.increments();
				table.integer('user_id').unsigned();
				table.foreign('user_id').references('users.id');
				table.integer('post_id').unsigned();
				table.foreign('post_id').references('forumPosts.id');
				table.string('content');
				table.string('image_path');
				table.timestamps(false, true);
			});
		})

		.then(() => {
			return knex.schema.createTable('purchaseRecords', (table) => {
				table.increments();
				table.integer('student_id').unsigned();
				table.foreign('student_id').references('users.id');
				table.string('package_type');
				table.integer('amount');
				table.string('payment_id');
				table.timestamps(false, true);
			});
		})

		.then(() => {
			return knex.schema.createTable('codingSkills', (table) => {
				table.increments();
				table.string('skill');
				table.timestamps(false, true);
			});
		})

		.then(() => {
			return knex.schema.createTable('instructors_skills', (table) => {
				table.increments();
				table.integer('instructor_id').unsigned();
				table.foreign('instructor_id').references('users.id');
				table.integer('codingSkill_id').unsigned();
				table.foreign('codingSkill_id').references('codingSkills.id');
				table.timestamps(false, true);
			});
		})

		.then(() => {
			return knex.schema.createTable('questions', (table) => {
				table.increments();
				table.integer('student_id').unsigned();
				table.foreign('student_id').references('users.id');
				table.string('content');
				table.string('image_path');
				table.timestamps(false, true);
			});
		})

		.then(() => {
			return knex.schema.createTable('instructorBids', (table) => {
				table.increments();
				table.integer('instructor_id').unsigned();
				table.foreign('instructor_id').references('users.id');
				table.integer('question_id').unsigned();
				table.foreign('question_id').references('questions.id');
				table.timestamps(false, true);
			});
		})

		.then(() => {
			return knex.schema.createTable('questions_skills', (table) => {
				table.increments();
				table.integer('question_id').unsigned();
				table.foreign('question_id').references('questions.id');
				table.integer('codingSkill_id').unsigned();
				table.foreign('codingSkill_id').references('codingSkills.id');
				table.timestamps(false, true);
			});
		})

		.then(() => {
			return knex.schema.createTable('chatrooms', (table) => {
				table.increments();
				table.integer('student_id').unsigned();
				table.foreign('student_id').references('users.id');
				table.integer('instructor_id').unsigned();
				table.foreign('instructor_id').references('users.id');
				table.integer('question_id').unsigned();
				table.foreign('question_id').references('questions.id');
				table.integer('duration');
				table.integer('fee');
				table.integer('s_rating');
				table.string('s_feedback');
				table.timestamps(false, true);
			});
		})

		.then(() => {
			return knex.schema.createTable('messages', (table) => {
				table.increments();
				table.integer('chatroom_id').unsigned();
				table.foreign('chatroom_id').references('chatrooms.id');
				table.string('text');
				table.string('voice_msg_url');
				table.string('image_url');
				table.string('video_url');
				table.string('type');
				table.timestamps(false, true);
			});
		})

		.then(() => {
			return knex.schema.createTable('complaints', (table) => {
				table.increments();
				table.integer('user_id').unsigned();
				table.foreign('user_id').references('users.id');
				table.integer('chatroom_id').unsigned();
				table.foreign('chatroom_id').references('chatrooms.id');
				table.boolean('complainInstructor');
				table.string('image_path');
				table.string('content');
				table.timestamps(false, true);
			});
		});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('complaints')
		.then(() => {
			return knex.schema.dropTable('messages');
		})
		.then(() => {
			return knex.schema.dropTable('chatrooms');
		})
		.then(() => {
			return knex.schema.dropTable('questions_skills');
		})
		.then(() => {
			return knex.schema.dropTable('instructorBids');
		})
		.then(() => {
			return knex.schema.dropTable('questions');
		})
		.then(() => {
			return knex.schema.dropTable('instructors_skills');
		})
		.then(() => {
			return knex.schema.dropTable('codingSkills');
		})
		.then(() => {
			return knex.schema.dropTable('purchaseRecords');
		})
		.then(() => {
			return knex.schema.dropTable('forumComments');
		})
		.then(() => {
			return knex.schema.dropTable('forumPosts');
		})
		.then(() => {
			return knex.schema.dropTable('favInstructors');
		})
		.then(() => {
			return knex.schema.dropTable('users');
		});
};