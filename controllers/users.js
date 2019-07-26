const knex = require("../db/knex");
module.exports = {

  register: (req, res) => {
    knex("users")
      .insert({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        img_url: req.body.img_url
      })
      .then(() => {
        res.redirect("/user_login");
      });
  },

  login: (req, res) => {
    knex("users")
      .where("email", req.body.email)
      .then(results => {
        let user = results[0];
        if (!user) {
          res.redirect("/user_login");
          return;
        }
        if (user.password === req.body.password) {
          req.session.user_id = user.id;
          req.session.save(() => {
            res.redirect("/landing");
          });
        } else {
          res.redirect("/user_login");
        }
      });
  }
};
