exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.string("display_name").notNullable();
        table.string("username").unique();
        table.string("password");
        table.string("email").unique();
        table.integer("phone");
        table.string("facebook_id").unique();
        table.string("access_token");
        table.string("propic_path");
        table.integer("balance").defaultTo(0);
        table.string("role").notNullable();
        table.string("i_education").defaultTo(null);
        table.string("i_year_codeExp").defaultTo(null);
        table.string("i_introduction").defaultTo(null);
        table.string("i_cert_path").defaultTo(null);
        table.string("i_spoken_lang").defaultTo(null);
        table.integer("i_num_rating").defaultTo(0);
        table.integer("i_total_rating").defaultTo(0);
        table.boolean("i_approved").defaultTo(true);
        table.timestamps(false, true);
    })

    .then(() => {
        return knex.schema.createTable('favInstructors', (table) => {
            table.increments();
            table.integer("student_id").unsigned();
            table.foreign("student_id").references('users.id');
            table.integer("instructor_id").unsigned();
            table.foreign("instructor_id").references('users.id');
            table.timestamps(false, true);
        });
    })


    .then(() => {
        return knex.schema.createTable('forumPosts', (table) => {
            table.increments();
            table.integer("user_id").unsigned();
            table.foreign("user_id").references('users.id');
            table.string("title");
            table.string("content");
            table.string("image_path").defaultTo(null);
            table.timestamps(false, true);
        });
    })

    .then(() => {
        return knex.schema.createTable('forumComments', (table) => {
            table.increments();
            table.integer("user_id").unsigned();
            table.foreign("user_id").references('users.id');
            table.integer("post_id").unsigned();
            table.foreign("post_id").references('forumPosts.id');
            table.string("content");
            table.string("image_path").defaultTo(null);
            table.timestamps(false, true);
        });
    })

    .then(() => {
        return knex.schema.createTable('purchaseRecords', (table) => {
            table.increments();
            table.integer("student_id").unsigned();
            table.foreign("student_id").references('users.id');
            table.string("package_type");
            table.integer("amount");
            table.string("payment_id");
            table.timestamps(false, true);
        });
    })

    .then(() => {
        return knex.schema.createTable('programmingLanguages', (table) => {
            table.increments();
            table.string("language");
            table.timestamps(false, true);
        });
    })

    .then(() => {
        return knex.schema.createTable('instructors_languages', (table) => {
            table.increments();
            table.integer("instructor_id").unsigned();
            table.foreign("instructor_id").references('users.id');
            table.integer("programLanguage_id").unsigned();
            table.foreign("programLanguage_id").references('programmingLanguages.id');
            table.timestamps(false, true);
        });
    })

    .then(() => {
        return knex.schema.createTable("questions", (table) => {
            table.increments();
            table.integer("student_id").unsigned();
            table.foreign("student_id").references('users.id');
            table.string("content");
            table.string("image_path").defaultTo(null);
            table.timestamps(false, true);
        });
    })

    .then(() => {
        return knex.schema.createTable("instructorBids", (table) => {
            table.increments();
            table.integer("instructor_id").unsigned();
            table.foreign("instructor_id").references('users.id');
            table.integer("question_id").unsigned();
            table.foreign("question_id").references('questions.id');
            table.timestamps(false, true);
        });
    })

    .then(() => {
        return knex.schema.createTable('questions_languages', (table) => {
            table.increments();
            table.integer("question_id").unsigned();
            table.foreign("question_id").references('questions.id');
            table.integer("programLanguage_id").unsigned();
            table.foreign("programLanguage_id").references('programmingLanguages.id');
            table.timestamps(false, true);
        });
    })

    .then(() => {
        return knex.schema.createTable("chatrooms", (table) => {
            table.increments();
            table.integer("student_id").unsigned();
            table.foreign("student_id").references('users.id');
            table.integer("instructor_id").unsigned();
            table.foreign("instructor_id").references('users.id');
            table.integer("question_id").unsigned();
            table.foreign("question_id").references('questions.id');
            table.integer("duration");
            table.integer("fee");
            table.integer("s_rating").defaultTo(null);
            table.string("s_feedback").defaultTo(null);
            table.timestamps(false, true);
        });
    })

    .then(() => {
        return knex.schema.createTable("messages", (table) => {
            table.increments();
            table.integer("chatroom_id").unsigned();
            table.foreign("chatroom_id").references('chatrooms.id');
            table.string("text").defaultTo(null);
            table.string("voice_msg_url").defaultTo(null);
            table.string("image_url").defaultTo(null);
            table.string("video_url").defaultTo(null);
            table.string("type");
            table.timestamps(false, true);
        });
    })

    .then(() => {
        return knex.schema.createTable("complaints", (table) => {
            table.increments();
            table.integer("user_id").unsigned();
            table.foreign("user_id").references('users.id');
            table.integer("chatroom_id").unsigned();
            table.foreign("chatroom_id").references('chatrooms.id');
            table.boolean("complainInstructor");
            table.string("image_path").defaultTo(null);
            table.string("content");
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
            return knex.schema.dropTable('questions_languages');
        })
        .then(() => {
            return knex.schema.dropTable('instructorBids');
        })
        .then(() => {
            return knex.schema.dropTable('questions');
        })
        .then(() => {
            return knex.schema.dropTable('instructors_languages');
        })
        .then(() => {
            return knex.schema.dropTable('programmingLanguages');
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