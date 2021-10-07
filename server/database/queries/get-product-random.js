const connection = require('../connection');

const handleRandom = () => connection.query('SELECT * FROM PRODUCTS ORDER BY RANDOM() LIMIT 4');
module.exports = handleRandom;
