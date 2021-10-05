const getDataPostQuery = require('../database/queries/getDataPostQuery');

const getDataPost = (req, res, next) => {
  getDataPostQuery(req.query.q)
    .then((data) => res.json({ data: data.rows }))
    .catch((err) => next(err));
};

module.exports = getDataPost;
