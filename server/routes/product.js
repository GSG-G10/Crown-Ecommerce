const express = require('express');

const product = express.Router();
const getProductId = require('../controllers/get-product-id');
const getAllProducts = require('../controllers/getAllProducts');
const { fetchProducts } = require('../controllers');

product.get('/', getAllProducts);
product.get('/:productId', getProductId);
product.get('/', fetchProducts);
module.exports = product;
