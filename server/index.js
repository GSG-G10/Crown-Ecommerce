const express = require('express');

const app = express();
require('env2')('config.env');
const path = require('path');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log('App running http://localhost:3000');
});
