const connection = require('../connection');

const getAllProducts = () => connection.query('SELECT * FROM PRODUCTS');

module.exports = getAllProducts;
