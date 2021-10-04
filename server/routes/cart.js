const router = require('express').Router();
const {
  getCartController,
  getTotalCotroller,
  addToCartController,
  deleteProductController,
} = require('../controllers');
// , addToCartController, deleteProductController, getTotalCotroller,
router.get('/:username', getCartController);
router.post('/:username', addToCartController);
router.delete('/:username/:productId', deleteProductController);
router.get('/total/:username', getTotalCotroller);

module.exports = router;
