const { verify } = require('jsonwebtoken');

const getSession = (jwt) => {
  if (!jwt) { return null; }
  verify(jwt, process.env.SECRET_KEY, (err, data) => {
    if (err) { return null; }
    return data;
  });
  return null;
};

module.exports = getSession;
