const connection = require('../connection');

const filterSearch = (searchWord) => connection.query(`SELECT * FROM PRODUCTS WHERE title LIKE'%${searchWord}%'`);

module.exports = filterSearch;
