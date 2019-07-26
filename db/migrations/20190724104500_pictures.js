exports.up = function(knex, Promise) {
  return knex.schema.createTable("pictures", function(table) {
    table.increments();
    table.string("userId");
    table.text("pictureUrl");
    table.string("pictureId");
    table.string('photographerName');
    table.string('photographerImg');
    table.string('pictureDescription')
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("pictures");
};
