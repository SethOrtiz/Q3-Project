exports.up = function(knex, Promise) {
  return knex.schema.createTable("pictures", function(table) {
    table.increments();
    table.string("userId")
    table.text("pictureInfo");
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("pictures");
};
