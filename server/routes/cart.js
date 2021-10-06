const router = require('express').Router();
const {
  getCartController,
  getTotalCotroller,
  addToCartController,
  deleteProductController,
  isAuth,
  addProductToSession,
  deleteProductFromSession,
} = require('../controllers');

router.get('/', getCartController);
router.post('/add-to-cart/:productId', addProductToSession, isAuth, addToCartController);
router.post('/delete-product/:productId', deleteProductFromSession, isAuth, deleteProductController);
router.get('/total', getTotalCotroller);

module.exports = router;
