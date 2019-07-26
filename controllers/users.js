const knex = require('../db/knex')

module.exports = {
  getProfile(req, res) {
    knex('users')
      .where('userId', req.params.userId)
      .then(user => res.json(user))
  },
  addProfile(req, res) {
    knex('users')
      .insert(req.body)
      .returning('*')
      .then(newUser => res.json(newUser))
  },
  updateProfile(req, res) {
    knex('users')
      .where('userId', req.params.id)
      .update(req.body)
      .returning('*')
      .then(updatedUser => res.json(updatedUser))
  },
  deleteProfile(req, res) {
    knex('users')
      .where('userId', req.params.userId)
      .del()
      .returning('*')
      .then(deletedUser => res.json(deletedUser))
  }
}