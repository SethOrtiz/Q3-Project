exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'John Doe', email:"john@app.com", img_url: "https://bit.ly/2LBPa3H", password: "password"},
        {name: 'Jane Doe', email:"jane@app.com", img_url: "https://bit.ly/2Ohcrty", password: "password"}
      ]);
    });
};
