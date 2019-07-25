exports.seed = function(knex, Promise) {
  return knex('pictures')
    .del()
    .then(function() {
      return knex('pictures').insert([
        { userId: 'Dwu85P9SOIk', pictureInfo: { info: "usSerInfooo", other: "ha" }}
      ])
    })
}


