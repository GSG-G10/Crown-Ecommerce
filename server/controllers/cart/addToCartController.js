const { addToCart } = require('../../database/queries/cart');

module.exports = (req, res, next) => {
  const { user_id } = req.dataUser;

  const { productId } = req.params;
  const { quantity } = req.body;
  addToCart(user_id, productId, quantity)
    .then(() => {
      res.status(201).json({
        message: 'Product added to cart successfully',
      });
    })
    .catch((err) => {
      next(err);
    });
};
