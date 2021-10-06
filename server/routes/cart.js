const router = require('express').Router();
const {
  getCartController,
  getTotalCotroller,
  addToCartController,
  deleteProductController,
  isAuth,
  addProductToSession,
} = require('../controllers');

router.get('/', getCartController);
router.post('/add-to-cart/:id', addProductToSession, isAuth, addToCartController);
router.delete('/:username/:productId', deleteProductController);
router.get('/total/:username', getTotalCotroller);

module.exports = router;
