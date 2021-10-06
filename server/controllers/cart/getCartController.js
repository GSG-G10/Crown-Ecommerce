module.exports = (req, res) => {
  const { cart } = req.cookies;
  if (!cart) {
    res.status(200).json({
      message: 'Cart is empty',
    });
  } else {
    res.status(200).json({
      cart,
    });
  }
};
