const express = require('express');

const router = express.Router();
const product = require('./product');

router.use('/product', product);

const loginUser = require('../controllers/loginUser');
const getDataPost = require('../controllers/getDataPost');

router.post('/login', loginUser);
router.get('/search', getDataPost);

module.exports = router;
