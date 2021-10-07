const { hashPassword } = require('../../utils');
const { addUserQuery } = require('../../database/queries');

const createUser = (userName, email, firstName, password) => hashPassword(password)
  .then((hashedPassword) => addUserQuery(userName, email, firstName, hashedPassword));

module.exports = createUser;
