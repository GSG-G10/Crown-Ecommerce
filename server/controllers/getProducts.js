const { getProducts } = require('../database/queries');

const fetchProducts = (req, res) => {
  getProducts()
    .then((data) => res.json(data))
    .catch(() => res.status(500).json({ message: 'Internal server error' }));
};

module.exports = fetchProducts;
