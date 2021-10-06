const { addToCart } = require('../../database/queries/cart');

module.exports = (req, res, next) => {
  const user_id = req.dataUser?.user_id;
  if (user_id) {
    const { productId } = req.params;
    const { quantity = 1 } = req.body;
    addToCart(user_id, productId, quantity)
      .then(() => {
        res.status(201).json({
          message: 'Product added to cart successfully',
        });
      })
      .catch((err) => {
        next(err);
      });
  } else {
    res.status(201).json({
      message: 'Product added to cart successfully,Confirm your purchases by logging in !! ',
    });
  }
};
