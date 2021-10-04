const { getCartTotal } = require('../../database/queries/cart');

module.exports = (req, res, next) => {
  const { username } = req.params;
  getCartTotal(username)
    .then(({ rows }) => {
      res.status(200).json(rows[0]);
    })
    .catch(next);
};
