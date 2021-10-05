const express = require('express');

const router = express.Router();
const product = require('./product');

router.use('/product', product);

const loginUser = require('../controllers/loginUser');

router.post('/login', loginUser);

module.exports = router;
