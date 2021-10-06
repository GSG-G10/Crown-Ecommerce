const express = require('express');

const product = express.Router();
const { getProductId } = require('../controllers');
const { fetchProducts } = require('../controllers');
const { getRandomProduct } = require('../controllers');

product.get('/more', getRandomProduct);
product.get('/:productId', getProductId);
product.get('/', fetchProducts);
module.exports = product;
