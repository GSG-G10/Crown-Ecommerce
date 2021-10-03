const jwt = require('jsonwebtoken');
const loginQuery = require('../database/queries/loginQuery');
const { comparePassword } = require('../utils/hashPassword');
const getHashPassword = require('../database/queries/getHashPassword');

const checkLogin = (req, res) => {
  const { email, password } = req.body;
  loginQuery(email)
    .then((result) => {
      if (result.rowCount) {
        getHashPassword(email)
          .then((hashed) => {
            comparePassword(password, hashed.rows[0].pasword, (err, resu) => {
              if (resu) {
                console.log('you are logged');
                res.json({ result: 'susses' });
              } else {
                console.log('password incorrect !');
                res.json({ err: 'password incorrect !' });
              }
            });
          });
      } else {
        console.log('email or password are incorrect');
        res.json({ msg: 'email or password are incorrect' });
      }
    });
};
module.exports = checkLogin;
