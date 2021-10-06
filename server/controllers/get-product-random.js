const getProductQueryRandom = require('../database/queries/get-product-random');

const getProductRandom = (req, res, next) => {
  getProductQueryRandom()
    .then(({ rows }) => {
      res.json({ data: rows });
    })
    .catch((err) => next(err));
};
module.exports = getProductRandom;
