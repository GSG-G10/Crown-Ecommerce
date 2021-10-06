const connection = require('../connection');

const getDataPostQuery = (searchWord) => connection.query(`SELECT * FROM PRODUCTS WHERE title LIKE'%${searchWord}%'`);

module.exports = getDataPostQuery;
