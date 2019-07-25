exports.up = function(knex, Promise) {
  return knex.schema.createTable("pictures", function(table) {
    table.increments();
    table.string("userId")
    table.string("pictureInfo");
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("pictures");
};
