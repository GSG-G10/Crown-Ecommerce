const { addToCart } = require('../../database/queries/cart');

module.exports = (req, res, next) => {
  const { productId, quantity } = req.body;
  const { username } = req.params;
  addToCart(username, productId, quantity)
    .then(() => {
      res.status(200).json({
        message: 'Product added to cart successfully',
      });
    })
    .catch((err) => {
      next(err);
    });
};
