const router = require('express').Router();
const {
  getCartController,
  getTotalCotroller,
  addToCartController,
  deleteProductController,
  isAuth,
} = require('../controllers');

router.get('/', isAuth, getCartController);
router.post('/:username', addToCartController);
router.delete('/:username/:productId', deleteProductController);
router.get('/total/:username', getTotalCotroller);

module.exports = router;
