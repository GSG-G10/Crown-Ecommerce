const express = require('express');

const product = express.Router();
const getProductId = require('../controllers/get-product-id');

product.get('/:id', getProductId);

module.exports = product;
