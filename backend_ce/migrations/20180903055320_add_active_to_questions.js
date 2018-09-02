exports.up = function(knex, Promise) {
	return knex.schema.table('questions', table => {
		table
			.boolean('active')
			.notNull()
			.defaultTo(true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.table('questions', table => {
		table.dropColumn('active');
	});
};
