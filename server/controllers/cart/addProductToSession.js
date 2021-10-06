// add product to cookie ==> cart
module.exports = (req, res, next) => {
  const { id: productId } = req.params;
  const { quantity = 1 } = req.body;
  const { cart } = req.cookies;

  if (!cart) {
    res.cookie('cart', {
      [productId]: {
        quantity,
        productId,
      },
    });
    next();
  } else {
    const { [productId]: product } = cart;
    if (product) {
      res.cookie('cart', {
        ...cart,
        [productId]: {
          ...product,
          quantity: product.quantity + quantity,
        },
      });
    }
    next();
  }
};
