<<<<<<< HEAD
const router = require('express').Router();

const { fetchProducts } = require('../controllers');

router.get('/products', fetchProducts);
=======
const express = require('express');

const router = express.Router();
const product = require('./product');

router.use('/product', product);

const loginUser = require('../controllers/loginUser');
const getDataPost = require('../controllers/getDataPost');

router.post('/login', loginUser);
router.get('/search', getDataPost);
>>>>>>> b34193a2f853b78e667064f0136d3cfcd1846742

module.exports = router;
