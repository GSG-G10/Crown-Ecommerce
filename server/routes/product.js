const express = require('express');

const product = express.Router();
const getProductId = require('../controllers/get-product-id');
const getAllProducts = require('../controllers/getAllProducts');
const { fetchProducts, getRandomProduct } = require('../controllers');

product.get('/category/:category', getAllProducts);
product.get('/new-product', getRandomProduct);
product.get('/:productId', getProductId);
product.get('/', fetchProducts);
module.exports = product;
