const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const {
    cookies: { token },
  } = req;

  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, userToken) => {
      if (err) {
        return next(err);
      }
      req.dataUser = userToken;
      return next();
    });
  } else {
    req.dataUser = null;
    return next();
    // res.redirect('/login');
  }
};
