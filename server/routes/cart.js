const router = require('express').Router();
const {
  getCartController,
  addToCartController,
  deleteProductController,
  isAuth,
  getCartProduct,
} = require('../controllers');

router.get('/:user_id', isAuth, getCartProduct);
router.get('/', isAuth, getCartController);
router.post('/', isAuth, addToCartController);
router.delete('/delete-product/:productId', isAuth, deleteProductController);
module.exports = router;
