exports.up = function(knex, Promise) {
  return knex.schema.createTable("pictures", function(table) {
    table.increments();
    table.string("photoId");
    table
      .integer("userId")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .index();
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("pictures");
};
