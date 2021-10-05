const { sign } = require('jsonwebtoken');

const signToken = (myToken) => new Promise((resolve, reject) => {
  sign(myToken, process.env.SECRET_KEY, (error, token) => {
    if (error) {
      reject(error);
    } else {
      resolve(token);
    }
  });
});

module.exports = { signToken };
