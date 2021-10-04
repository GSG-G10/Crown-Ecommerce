const express = require('express');

const router = express.Router();

const loginUser = require('../controllers/loginUser');
const getDataPost = require('../controllers/getDataPost');

router.post('/login', loginUser);
router.post('/search', getDataPost);

module.exports = router;
