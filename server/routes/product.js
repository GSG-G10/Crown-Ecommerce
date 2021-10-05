const express = require('express');

const product = express.Router();
const getProductId = require('../controllers/get-product-id');
const getAllProducts = require('../controllers/getAllProducts');

product.get('/', getAllProducts);
product.get('/:productId', getProductId);

module.exports = product;
