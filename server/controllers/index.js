const {
  getCartController, addToCartController,
  deleteProductController,
} = require('./cart');
const isAuth = require('./isAuth');
const fetchProducts = require('./getProducts');
const getProductId = require('./get-product-id');
const getRandomProduct = require('./get-product-random');

module.exports = {
  getCartController,
  addToCartController,
  deleteProductController,
  isAuth,
  fetchProducts,
  getRandomProduct,
  getProductId,

};
