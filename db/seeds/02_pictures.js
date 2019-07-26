exports.seed = function(knex, Promise) {
  return knex('pictures')
    .del()
    .then(function() {
      return knex('pictures').insert([
        { userId: 'Dwu85P9SOIk', pictureUrl: 'unsplash.com', pictureId:'1234abc', photographerName:'Bob Smith', photographerImg:'unsplash.com/profilepic', pictureDescription:'this is a pic of a dog'}
      ])
    })
}


