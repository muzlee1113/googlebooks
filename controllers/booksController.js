const db = require("../models");

// define methods for the books controller



module.exports = {
  findAll: function(req, res) {
    db.Book
      .find({})
      .sort({ date: -1 })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findOneAndRemove({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
