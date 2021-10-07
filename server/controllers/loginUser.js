/* eslint-disable no-throw-literal */
const { verify } = require('bcrypt');
const loginQuery = require('../database/queries/loginQuery');
const getHashPassword = require('../database/queries/getHashPassword');
const { loginSchema } = require('../utils/validation/loginValidation');
const { signToken } = require('../utils/jwt');

const checkLogin = (req, res, next) => {
  let userId;

  loginSchema.validateAsync(req.body)
    .then((validate) => loginQuery(validate.email))
    .then((result) => {
      if (result.rowCount) {
        return getHashPassword(req.body.email);
      }
      throw ({ status: 401, msg: 'you need to signup ' });
    }).then((userData) => {
      const { password, user_id } = userData.rows[0];
      userId = user_id;
      return password;
    })
    .then((hashed) => verify(req.body.password, hashed))
    .then((result) => {
      if (result) {
        return signToken({ user_id: userId });
      }
      throw ({ status: 401, msg: 'email or password are incorrect ' });
    })
    .then((token) => res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      maxAge: 900000,
    }).json({ msg: 'logged in susses' }))
    .catch((err) => {
      if (err.msg) {
        res.status(err.status).json({ msg: err.msg });
      } else {
        next(err);
      }
    });
};
module.exports = checkLogin;
