const express = require('express');

const router = express.Router();
const cartRoute = require('./cart');
const product = require('./product');
const loginUser = require('../controllers/loginUser');
const getDataPost = require('../controllers/getDataPost');

router.use('/product', product);
router.post('/login', loginUser);

router.use('/cart', cartRoute);
router.get('/search/:query', getDataPost);

module.exports = router;
