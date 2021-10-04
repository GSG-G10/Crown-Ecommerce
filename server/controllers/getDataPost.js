const getDataPostQuery = require('../database/queries/getDataPostQuery');

const getDataPost = (req, res) => {
  getDataPostQuery(req.query.q)
    .then((data) => res.json({ data: data.rows }))
    .catch(() => res.json({ err: 'The product you are looking for is not available ' }));
};

module.exports = getDataPost;
