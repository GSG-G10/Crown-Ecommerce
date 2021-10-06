const connection = require('../connection');

const handleRandom = () => connection.query('SELECT id, image1 FROM PRODUCTS ORDER BY RANDOM() LIMIT 4');
module.exports = handleRandom;
