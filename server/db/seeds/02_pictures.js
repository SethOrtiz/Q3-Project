exports.seed = function(knex, Promise) {
  return knex('pictures')
    .del()
    .then(function() {
      return knex('pictures').insert([
        { photoId: 'Dwu85P9SOIk', userId: 1}
      ])
    })
}


