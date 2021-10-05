const express = require('express');

const product = express.Router();
const getProductId = require('../controllers/get-product-id');
const getRandomProduct = require('../controllers/get-product-random');

product.get('/more', getRandomProduct);
product.get('/:productId', getProductId);

module.exports = product;
