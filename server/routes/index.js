const express = require('express');

const router = express.Router();
const cartRoute = require('./cart');
const loginUser = require('../controllers/loginUser');

router.post('/login', loginUser);
router.use('/cart', cartRoute);
module.exports = router;
