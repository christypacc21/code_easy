//2018-8-21 night
exports.up = function(knex, Promise) {
    return knex.schema.createTable("complaints", table => {
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
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("complaints");
  };
  

////////////////////////////////////////////////////////////////

exports.up = function(knex, Promise) {
    return knex.schema.createTable("chatrooms", table => {
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
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("chatrooms");
  };

////////////////////////////////////////////////////////////////

exports.up = function(knex, Promise) {
    return knex.schema.createTable("messages", table => {
      table.increments();
      table.integer("chatroom_id").unsigned();
      table.foreign("chatroom_id").references('chatroom.id');
      table.string("text");
      table.string("voice_msg_url").defaultTo(null);    
      table.string("image_url").defaultTo(null);
      table.string("video_url").defaultTo(null);
      table.string("type");
      table.timestamps(false, true);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("messages");
  };
////////////////////////////////////////////////////////////////

exports.up = function(knex, Promise) {
    return knex.schema.createTable("questions", table => {
      table.increments();
      table.integer("user_id").unsigned();
      table.foreign("user_id").references('users.id');
      table.string("content");
      table.string("image_path").defaultTo(null);
      table.timestamps(false, true);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("questions");
  };

////////////////////////////////////////////////////////////////

exports.up = function(knex, Promise) {
    return knex.schema.createTable("instructorBids", table => {
      table.increments();
      table.integer("instructor_id").unsigned();
      table.foreign("instructor_id").references('users.id');
      table.integer("question_id").unsigned();
      table.foreign("question_id").references('questions.id');
      table.timestamps(false, true);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("instructorBids");
  };

////////////////////////////////////////////////////////////////