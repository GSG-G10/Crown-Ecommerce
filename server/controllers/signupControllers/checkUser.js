const { checkUserQuery } = require('../../database/queries');

const checkUser = (userName, email) => checkUserQuery(userName, email)
  .then((data) => data.rows)
  .then((data) => {
    if (data.length > 1) return 'userName and email are used by other users';
    if (data.length === 1) {
      if (data[0].username !== userName) return 'email is used by another user';
      if (data[0].email !== email) return 'userName is used by another user';
      return 'user already exists, try to login';
    }
    return null;
  });

module.exports = checkUser;
