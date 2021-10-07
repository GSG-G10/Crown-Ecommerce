const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { token } = req.cookies;
  console.log(req.cookies);
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, userToken) => {
      if (err) {
        return next(err);
      }
      req.dataUser = userToken;
      return next();
    });
  } else {
    res.status(401).json({
      message: 'Unauthorized',
    });
  }
};
