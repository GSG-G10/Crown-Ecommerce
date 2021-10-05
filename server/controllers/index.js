const {
  getCartController, addToCartController, getTotalCotroller, deleteProductController,
} = require('./cart');
const isAuth = require('./isAuth');

module.exports = {
  getCartController,
  getTotalCotroller,
  addToCartController,
  deleteProductController,
  isAuth,
};
