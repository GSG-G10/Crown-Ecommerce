const {
  getCartController, addToCartController,
  deleteProductController,
} = require('./cart');
const isAuth = require('./isAuth');

module.exports = {
  getCartController,
  addToCartController,
  deleteProductController,
  isAuth,

};
const fetchProducts = require('./getProducts');

module.exports = { fetchProducts };
