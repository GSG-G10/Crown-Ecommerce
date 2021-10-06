const { deleteFromCart } = require('../../database/queries/cart');

module.exports = (req, res, next) => {
  const { user_id } = req.dataUser;
  const { productId } = req.body;
  deleteFromCart(user_id, productId)
    .then(() => {
      res.status(200).json({
        message: 'Product deleted from cart successfully',
      });
    })
    .catch((err) => {
      next(err);
    });
};
