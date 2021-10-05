const getProduct = require('../database/queries/get-product');

const test = (req, res) => {
  getProduct(req.params.id)
    .then((data) => {
      res.send(data.rows);
    })
    .catch(console.log(`product not found num: ${req.params.id}`));
};

module.exports = test;
