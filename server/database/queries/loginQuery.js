const connection = require('../connection');

const loginQuery = (email) => connection.query('SELECT email FROM users WHERE email = $1', [email]);

module.exports = loginQuery;
