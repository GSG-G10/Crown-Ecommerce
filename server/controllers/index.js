const { getCartController, addToCartController, deleteProductController,getCartProduct } = require('./cart');
const isAuth = require('./isAuth');
const fetchProducts = require('./getProducts');
const getProductId = require('./get-product-id');
const getRandomProduct = require('./get-product-random');

const { signup } = require('./signupControllers');

module.exports = {
  fetchProducts,
  getRandomProduct,
  getProductId,
  getCartController,
  addToCartController,
  deleteProductController,
  isAuth,
<<<<<<< HEAD
  getCartProduct,
=======
  signup,
>>>>>>> 7fe8557ff0d9408303cb92103e1977b4161c5bde
};
