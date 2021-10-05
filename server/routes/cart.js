const router = require('express').Router();
const {
  getCartController,
  getTotalCotroller,
  addToCartController,
  deleteProductController,
} = require('../controllers');

router.get('/', getCartController);
router.post('/:username', addToCartController);
router.delete('/:username/:productId', deleteProductController);
router.get('/total/:username', getTotalCotroller);

module.exports = router;
