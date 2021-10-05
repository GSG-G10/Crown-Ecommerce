const getAllProductsQuery = require('../database/queries/getAllProducts');

const getAllProducts = (req, res, next) => {
  getAllProductsQuery()
    .then(({ rows }) => {
      res.json({ data: rows });
    })
    .catch((err) => next(err));
};
module.exports = getAllProducts;
