const router = require('express').Router();
const { fetchProducts } = require('../controllers');

router.get('/products', fetchProducts);

module.exports = router;
