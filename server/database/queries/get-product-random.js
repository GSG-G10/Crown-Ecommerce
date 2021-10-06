const connection = require('../connection');

const getProductRandom = () => connection.query('SELECT id, image1 FROM PRODUCTS ORDER BY RANDOM() LIMIT 4');

const handleRandom = async () => {
  const random = await getProductRandom();
  return random.rows;
};
module.exports = handleRandom;
