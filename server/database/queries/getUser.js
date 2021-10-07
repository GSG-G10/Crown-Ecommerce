const connection = require('../connection');

const getUserQuery = (userName, email) => {
  const sqlScript = {
    text: 'SELECT * FROM USERS WHERE USERNAME = $1 AND EMAIL = $2',
    values: [userName, email],
  };
  return connection.query(sqlScript);
};

module.exports = getUserQuery;
