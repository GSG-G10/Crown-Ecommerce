const {
  getCartController, addToCartController,
  deleteProductController,
} = require('./cart');
const isAuth = require('./isAuth');
const fetchProducts = require('./getProducts');

module.exports = {
  getCartController,
  addToCartController,
  deleteProductController,
  isAuth,
  fetchProducts,

};
