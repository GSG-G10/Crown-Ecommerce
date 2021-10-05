const connection = require('../connection');

const getProductRandom = () => connection.query('SELECT * FROM PRODUCTS ORDER BY RANDOM() LIMIT 4');

const handleRandom = async () => {
  const random = await getProductRandom();
  const randomArray = [];
  random.rows.map((row) => {
    randomArray.push({ id: row.id, img: row.image1 });
  });

  return randomArray;
};
module.exports = handleRandom;
