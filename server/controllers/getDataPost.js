const { filterSearch } = require('../database/queries');

const getDataPost = (req, res, next) => {
  filterSearch(req.params.query)
    .then(({ rows }) => rows)
    .then((data) => {
      res.json(data);
    })

    .catch((err) => next(err));
};

module.exports = getDataPost;
