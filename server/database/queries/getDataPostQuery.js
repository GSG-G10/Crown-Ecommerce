const connection = require('../connection');

const filterSerch = (searchWord) => connection.query(`SELECT * FROM PRODUCTS WHERE title LIKE'%${searchWord}%'`);
const getDataPostQuery = async (searchWord) => {
  const data = await filterSerch(searchWord);
  return data.rows;
};

module.exports = getDataPostQuery;
