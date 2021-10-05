const getProductQuery = require('../database/queries/get-product');

const getProduct = (req, res, next) => {
  const { productId } = req.params;
  getProductQuery(productId)
    .then((rows) => {
      res.json({ data: rows });
    })
    .catch((err) => next(err));
};
module.exports = getProduct;
