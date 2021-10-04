const { getCart } = require('../../database/queries/cart');

module.exports = (req, res, next) => {
  const { username } = req.params;
  getCart(username)
    .then(({ rows }) => {
      res.status(200).json(rows);
    })
    .catch((err) => {
      next(err);
    });
};
