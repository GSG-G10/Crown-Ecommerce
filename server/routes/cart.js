const router = require('express').Router();
const {
  getCartController, addToCartController, deleteProductController, getTotalCotroller,
} = require('../controllers');

router.get('/:username', getCartController);
router.post('/:username', addToCartController);
router.delete('/:username/:productId', deleteProductController);
router.get('/total/:username', getTotalCotroller);

module.exports = router;
