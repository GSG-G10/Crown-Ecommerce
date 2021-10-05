const connection = require('../connection');

const getProduct = (id) => connection.query('SELECT * FROM PRODUCTS WHERE id = $1;', [id]);

module.exports = getProduct;
