const getAllProductsQuery = require('../database/queries/getAllProducts');

const getAllProducts = (req, res, next) => {
  const { category } = req.params;
  getAllProductsQuery(category)
    .then(({ rows }) => {
      res.json({ data: rows });
    })
    .catch((err) => next(err));
};
module.exports = getAllProducts;
