const getProductQueryRandom = require('../database/queries/get-product-random');

const getProductRandom = (req, res, next) => {
  getProductQueryRandom()
    .then((randomArray) => {
      res.json(randomArray);
    })
    .catch((err) => next(err));
};
module.exports = getProductRandom;
