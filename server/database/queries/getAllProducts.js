const connection = require('../connection');

const getAllProducts = (category) => connection.query(' SELECT * FROM PRODUCTS WHERE category = $1 ', [category]);

module.exports = getAllProducts;
