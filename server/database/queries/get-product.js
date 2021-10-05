const connection = require('../connection');

const getProduct = (id) => connection.query(`SELECT * FROM PRODUCTS WHERE id = ${id};`);

module.exports = getProduct;
