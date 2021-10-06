const connection = require('../connection');

module.exports = {
  getCart: (userId) => connection.query('SELECT * FROM cart WHERE userId = $1', [userId]),
  addToCart: (userId, productId, quantity) => connection.query('INSERT INTO cart (userId, productId, quantity) VALUES ($1, $2, $3)', [userId, productId, quantity]),
  deleteFromCart: (userId, productId) => connection.query('DELETE FROM cart WHERE userId = $1 AND productId = $2', [userId, productId]),
};
