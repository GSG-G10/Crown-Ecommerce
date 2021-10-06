const connection = require('../connection');

const getDataPostQuery = (searchWord) => connection.query('SELECT * FROM PRODUCTS WHERE title LIKE  $1', [`%${searchWord}%`]);

module.exports = getDataPostQuery;
