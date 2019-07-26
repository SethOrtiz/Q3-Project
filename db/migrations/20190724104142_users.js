exports.up = function(knex, Promise) {
    return knex.schema.createTable("users", table => {
      table.increments();
      table.string("userId");
      table.string("userName");
      table.text("bio");
      table.text("profilePic");
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("users");
  };
  