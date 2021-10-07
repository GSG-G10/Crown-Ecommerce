const express = require('express');

const product = express.Router();
const { getProductId, fetchProducts, getRandomProduct } = require('../controllers');

product.get('/new-product', getRandomProduct);
product.get('/:productId', getProductId);
product.get('/', fetchProducts);
module.exports = product;
