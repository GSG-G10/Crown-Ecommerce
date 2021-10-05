const { verify } = require('jsonwebtoken');

const getSession = (jwt) => new Promise((resolve, reject) => {
  verify(jwt, process.env.SECRET_KEY, (err, data) => {
    if (err) { return reject(err); }
    return resolve(data);
  });
});

module.exports = getSession;
