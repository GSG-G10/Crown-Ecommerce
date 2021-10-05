const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.cookies;
  if (token.token) {
    jwt.verify(token.token, process.env.SECRET_KEY, (err, userToken) => {
      if (err) {
        return next(err);
      }
      const decoded = userToken;
      req.dataUser = decoded;
      return next();
    });
  } else {
    res.redirect('/login');
  }
};
