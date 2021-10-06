const getUserQuery = require('../../database/queries/getUser');
const { createCookies } = require('../../utils');
const { signToken } = require('../../utils/jwt');
const { signupSchema } = require('../../utils/validation/signupValidation');
const checkUser = require('./checkUser');
const createUser = require('./createUser');

const signup = (req, res) => {
  const {
    userName, email, firstName, password,
  } = req.body;
  signupSchema.validateAsync(req.body)
    .catch(() => { throw { message: 'validation error', cause: 'invalid inputs' }; })
    .then(() => checkUser(userName, email).then((exists) => {
      // eslint-disable-next-line no-throw-literal
      if (exists) { throw { message: exists, cause: 'validation error' }; }
    }))
    .then(() => createUser(userName, email, firstName, password))
    .then(() => getUserQuery(userName, email))
    .then((data) => data.rows[0].user_id)
    .then((userId) => signToken({ user_id: userId }))
    .then((token) => createCookies(res, userName, true, token))
    .then(() => res.status(201).json({ message: 'user registered successfully' }))
    .catch((err) => {
      if (!err.cause) { res.status(500).json({ message: 'internal server error' }); } else res.status(403).json({ message: err.message });
    });
  return null;
};

module.exports = signup;
