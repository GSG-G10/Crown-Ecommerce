const express = require('express');

const product = express.Router();
const getAllProducts = require('../controllers/getAllProducts');
const { getProductId, fetchProducts, getRandomProduct } = require('../controllers');

product.get('/', getAllProducts);

product.get('/more', getRandomProduct);
product.get('/:productId', getProductId);
product.get('/', fetchProducts);
module.exports = product;
