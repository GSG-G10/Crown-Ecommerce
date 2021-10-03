import connection from '../connection';

module.exports = {
  getCart: (userName) => connection
    .query('SELECT * FROM cart WHERE username = ?', [userName]),

  addToCart: (userName, productId, quantity) => connection.query('INSERT INTO cart (username, id, quantity) VALUES (?, ?, ?)', [userName, productId, quantity]),
  deleteFromCart: (userName, productId) => connection.query('DELETE FROM cart WHERE username = ? AND id = ?', [userName, productId]),
  updateCart: (userName, productId, quantity) => connection.query('UPDATE cart SET quantity = ? WHERE username = ? AND id = ?', [quantity, userName, productId]),
  getCartTotal: (userName) => connection.query('SELECT SUM(cart.quantity * products.price) AS total FROM cart INNER JOIN products ON cart.id = products.id WHERE username = ?', [userName]),
};
