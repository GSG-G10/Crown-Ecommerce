const connection = require('../../connection');

const addUserQuery = (userName, email, firstName, password) => {
  const sqlScript = {
    text: 'INSERT INTO USERS(USERNAME, EMAIL, F_NAME, PASWORD) VALUES ($1 , $2 , $3 , $4);',
    values: [userName, email, firstName, password],
  };
  return connection.query(sqlScript);
};

module.exports = addUserQuery;
