module.exports = (req, res, next) => {
  const { productId } = req.params;
  const { cart } = req.cookies;
  delete cart[productId];
  next();
};
