const { Pool } = require('pg');
require('env2')('.env');

const { DB_URL, DEV_DB_URL, NODE_ENV } = process.env;

let dbUrl = '';

switch (NODE_ENV) {
  case 'production':
    dbUrl = DB_URL;
    break;
  case 'development':
    dbUrl = DEV_DB_URL;
    break;
  default:
    throw new Error('No database found');
}

const options = {
  connectionString: dbUrl,
  ssl: false,
};

module.exports = new Pool(options);
