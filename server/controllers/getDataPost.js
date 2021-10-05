const getDataPostQuery = require('../database/queries/getDataPostQuery');

const getDataPost = (req, res, next) => {
  console.log('is 1:', req.params.query);
  getDataPostQuery(req.params.query)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => next(err));
};

module.exports = getDataPost;
