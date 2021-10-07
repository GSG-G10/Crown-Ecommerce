const connection = require('../connection');

const getProducts = () => {
  const sqlScript = {
    text: 'SELECT * FROM PRODUCTS ;',
    values: [],
  };
  return connection.query(sqlScript).then((data) => data.rows);
};

module.exports = getProducts;
