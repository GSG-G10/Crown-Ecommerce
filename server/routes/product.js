const express = require('express');

const product = express.Router();

const getProduct = require('../database/queries/get-product');

product.get('/:id', (req, res) => {
  getProduct(req.params.id)
    .then((data) => {
      res.send(data.rows);
    })
    .catch(console.log(`product not found num: ${req.params.id}`));
});

module.exports = product;
