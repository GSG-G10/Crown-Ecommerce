const jwt = require('jsonwebtoken');
const loginQuery = require('../database/queries/loginQuery');
const { comparePassword } = require('../utils/hashPassword');
const getHashPassword = require('../database/queries/getHashPassword');
const { loginSchema } = require('../utils/validation/loginValidation');

const checkLogin = (req, res) => {
  loginSchema.validateAsync(req.body)
    .then((validate) => {
      loginQuery(validate.email)
        .then((result) => {
          if (result.rowCount) {
            getHashPassword(validate.email)
              .then((hashed) => {
                comparePassword(validate.password, hashed.rows[0].pasword, (err, resu) => {
                  if (resu) {
                    jwt.sign({ is_Admin: true }, process.env.SECRET_KEY, (error, token) => {
                      if (token) {
                        res.cookie('token', token, {
                          httpOnly: true,
                          secure: true,
                          maxAge: 900000,
                        })
                          .cookie('login', true).json({ msg: 'susses' });
                      } else {
                        res.status(500).json({ msg: 'internal server error !' });
                      }
                    });
                  } else {
                    res.status(500).json({ err: 'password incorrect !' });
                  }
                });
              });
          } else {
            res.status(500).json({ msg: 'email or password are incorrect ' });
          }
        });
    });
};
module.exports = checkLogin;
