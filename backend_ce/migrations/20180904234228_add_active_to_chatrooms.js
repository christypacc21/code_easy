exports.up = function(knex, Promise) {
	return knex.schema.table('chatrooms', table => {
		table
			.boolean('active')
			.notNull()
			.defaultTo(true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.table('chatrooms', table => {
		table.dropColumn('active');
	});
};
