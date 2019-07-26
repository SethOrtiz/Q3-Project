exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {userName: 'John Doe', bio:"I like dogs", profilePic: "https://bit.ly/2LBPa3H", userId: "sdf12312332sdddsdfsdf"}
      ]);
    });
};
