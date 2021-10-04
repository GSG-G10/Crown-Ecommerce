const router = require('express').Router();
const cartRoute = require('./cart');

router.use('/cart', cartRoute);

module.exports = router;
