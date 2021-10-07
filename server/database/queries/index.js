const getProducts = require('./getProducts');
const { checkUserQuery, addUserQuery } = require('./signupQueries');
const filterSearch = require('./getDataPostQuery');

module.exports = {
  getProducts, checkUserQuery, addUserQuery, filterSearch,
};
