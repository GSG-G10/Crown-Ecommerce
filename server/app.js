require('env2')('.env');
const { join } = require('path');
const express = require('express');

const app = express();
const cookieParser = require('cookie-parser');
const router = require('./routes');
const product = require('./routes/product');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 8080);

app.use('/product', product);

app.use('/api/v1/', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

module.exports = app;
