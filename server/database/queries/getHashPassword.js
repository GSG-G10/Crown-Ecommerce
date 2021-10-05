const connection = require('../connection');

const getHashPassword = (email) => connection.query('SELECT password , user_id FROM users WHERE email = $1', [email]);

module.exports = getHashPassword;
