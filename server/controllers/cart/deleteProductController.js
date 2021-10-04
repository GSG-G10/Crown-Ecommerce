const { deleteFromCart } = require('../../database/queries/cart');

module.exports = (req, res, next) => {
  const { productId, username } = req.params;
  deleteFromCart(username, productId)
    .then(() => {
      res.status(200).json({
        message: 'Product deleted from cart successfully',
      });
    })
    .catch((err) => {
      next(err);
    });
};
