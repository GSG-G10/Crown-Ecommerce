const {
  getCartController, addToCartController, getTotalCotroller, deleteProductController, addProductToSession,
} = require('./cart');
const isAuth = require('./isAuth');

module.exports = {
  getCartController,
  getTotalCotroller,
  addToCartController,
  deleteProductController,
  isAuth,
  addProductToSession,
};
