const express = require('express');

const router = express.Router();
const cartRoute = require('./cart');

const product = require('./product');

router.use('/product', product);

const loginUser = require('../controllers/loginUser');
const getDataPost = require('../controllers/getDataPost');

router.post('/login', loginUser);
router.use('/cart', cartRoute);
router.get('/search/:query', getDataPost);

module.exports = router;
