const createCookies = require('./createCookies');
const { hashPassword, comparePasswords } = require('./passwordHash');

module.exports = { hashPassword, comparePasswords, createCookies };
