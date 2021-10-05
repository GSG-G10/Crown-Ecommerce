const { getCart } = require('../../database/queries/cart');
const { ExtractJwt } = require('../../utils');

module.exports = (req, res, next) => {
  const { id } = ExtractJwt(req);
  getCart(username)
    .then(({ rows }) => {
      res.status(200).json(rows);
    })
    .catch((err) => {
      next(err);
    });
};
