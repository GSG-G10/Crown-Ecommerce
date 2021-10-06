const { getProducts } = require('../database/queries');

const fetchProducts = (req, res, next) => {
  getProducts()
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

module.exports = fetchProducts;
