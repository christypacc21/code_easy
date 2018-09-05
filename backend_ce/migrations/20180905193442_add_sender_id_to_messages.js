exports.up = function(knex, Promise) {
	return knex.schema.table('messages', table => {
		table.integer('sender_id').unsigned();
		table.foreign('sender_id').references('users.id');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.table('messages', table => {
		table.dropForeign('sender_id');
		table.dropColumn('sender_id');
	});
};
