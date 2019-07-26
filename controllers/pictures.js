const knex = require('../db/knex')

module.exports = {
  getAll(req, res) {
    knex('pictures')
      .orderBy('id', 'asc')
      .then(pictures => res.json(pictures))
  },
  getOne(req, res) {
    knex('pictures')
      .where('id', req.params.id)
      .then(picture => res.json(picture))
  },
  addOne(req, res) {
    knex('pictures')
      .insert(req.body)
      .returning('*')
      .then(newPicture => res.json(newPicture))
  },
  updateOne(req, res) {
    knex('pictures')
      .where('id', req.params.id)
      .update(req.body)
      .returning('*')
      .then(updatedPicture => res.json(updatedPicture))
  },
  deletePicture(req, res) {
    knex('pictures')
      .where('id', req.params.id)
      .del()
      .returning('*')
      .then(deletedPicture => res.json(deletedPicture))
  }
}
