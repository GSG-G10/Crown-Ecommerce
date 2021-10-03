const connection = require('../connection');

const getHashPassword = (email) => connection.query(`SELECT pasword FROM users WHERE email = '${email}';`);

module.exports = getHashPassword;
