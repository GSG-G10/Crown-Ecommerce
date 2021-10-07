const joi = require('joi');

const signupSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  userName: joi.string().min(3).required(),
  firstName: joi.string().min(2).required(),
});

module.exports = { signupSchema };
