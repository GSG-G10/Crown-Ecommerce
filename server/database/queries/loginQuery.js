const connection = require('../connection');

const loginQuery = (email) => connection.query(`SELECT email FROM users WHERE email = '${email}'`);

module.exports = loginQuery;
