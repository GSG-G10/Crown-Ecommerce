const { getCart } = require('../../database/queries/cart');

module.exports = (req, res, next) => {
  const { user_id } = req.dataUser;
  getCart(user_id)
    .then(({ rows }) => {
      res.status(200).json(rows);
    })
    .catch((err) => {
      next(err);
    });
};
