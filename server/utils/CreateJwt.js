const { sign } = require('jsonwebtoken');

const createSession = (userName) => {
  const cookiePayload = {
    userName,
    loginTime: Date.now(),
  };
  return new Promise((resolve, reject) => {
    sign(cookiePayload, process.env.SECRET_KEY, (err, token) => {
      if (err) {
        return reject(err);
      }
      return resolve(token);
    });
  });
};

module.exports = createSession;
