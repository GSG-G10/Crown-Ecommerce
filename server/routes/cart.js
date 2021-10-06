const router = require('express').Router();
const {
  getCartController,
  addToCartController,
  deleteProductController,
  isAuth,
} = require('../controllers');

router.get('/', isAuth, getCartController);
router.delete('/add-to-cart/:productId', isAuth, addToCartController);
router.post('/delete-product/:productId', isAuth, deleteProductController);
module.exports = router;
