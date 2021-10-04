const jwt = require('jsonwebtoken');
const loginQuery = require('../database/queries/loginQuery');
const { comparePassword } = require('../utils/hashPassword');
const getHashPassword = require('../database/queries/getHashPassword');
require('env2')('.env');

const checkLogin = (req, res) => {
  const { email, password } = req.body;
  loginQuery(email)
    .then((result) => {
      if (result.rowCount) {
        getHashPassword(email)
          .then((hashed) => {
            comparePassword(password, hashed.rows[0].pasword, (err, resu) => {
              if (resu) {
                jwt.sign({ is_Admin: true }, process.env.SECRET_KEY, (error, token) => {
                  if (token) {
                    res.cookie('qwerasdfzxcv', token, {
                      httpOnly: true,
                      secure: true,
                      maxAge: 900000,
                    })
                      .cookie('login', true);
                  } else {
                    res.status(500).json({ msg: 'internal server error !' });
                  }
                });
                res.json({ msg: 'susses' });
              } else {
                res.json({ err: 'password incorrect !' });
              }
            });
          });
      } else {
        res.json({ msg: 'email or password are incorrect' });
      }
    });
};
module.exports = checkLogin;
