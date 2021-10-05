const express = require('express');

const product = express.Router();
const getProductId = require('../controllers/get-product-id');
const { fetchProducts } = require('../controllers');

product.get('/:productId', getProductId);
product.get('/', fetchProducts);
module.exports = product;
