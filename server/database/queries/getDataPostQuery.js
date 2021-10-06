const connection = require('../connection');

const filterSearch = (searchWord) => connection.query('SELECT * FROM PRODUCTS WHERE title LIKE $1', [`%${searchWord}%`]);

module.exports = filterSearch;
